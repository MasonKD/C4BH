#! /usr/bin/env python3

import os
# from difflib import unified_diff

def move_inline_function(file_path, debug_mode):
	"""
	Moves an inline function defined within a default exported component's onSubmit prop
	to a separate definition and updates the component to use the new function name.

	Args:
	file_path: Path to the .jsx file to process.
	debug_mode: Boolean flag indicating debug mode.
	"""
	# Prompt user for confirmation (only in debug mode)
	if debug_mode:
		confirmation = input(f"Modify {file_path}? (y/n): ")
		if confirmation.lower() != "y":
			print(f"Skipping {file_path}")
			return

	with open(file_path, "r") as f:
		original_code = f.readlines()

	# Find the line with `onSubmit={async (event) => {`
	inline_function = []
	target_line = None
	open_count = None
	cut_char_2 = None
	for i, line in enumerate(original_code):
		if "onSubmit={async (event) => {" in line.strip():
			target_line = i
			cut_char_1 = line.rindex("{")
			inline_function.append(line[cut_char_1+1:])
			replace_char_1 = line.index("{")
			open_count = 1
			continue
		if target_line:
			for j, char in enumerate(line):
				if char == "{":
					open_count += 1
				elif char == "}":
					open_count -= 1

				if open_count == 0:
					closing_location = i
					cut_char_2 = j
			inline_function.append(line if not cut_char_2 else line[:cut_char_2-1])
			if open_count <= 0:
				break


	if not target_line or len(inline_function) == 0:
		print(f"No onSubmit assignment found in {file_path}")
		return
	if debug_mode:
		print(f"found onSubmit function at line#{target_line} char#{cut_char_1}, replace {replace_char_1} ending at line#{closing_location} char#{cut_char_2}")

	# Generate the new function definition
	file_name = os.path.splitext(os.path.basename(file_path))[0]
	new_function_name = f"submit{file_name}"
	new_function = f"\nexport async function {new_function_name}(event) \u007b{''.join(inline_function)}\n\u007d"

	new_onsubmit_line = original_code[target_line][:replace_char_1+1] + f"{new_function_name}"
	# print(f"new submit line: {new_onsubmit_line}")

	new_submit_closing_line = original_code[closing_location-1][cut_char_2+1:]
	# print(f"new submit closing line: {new_submit_closing_line}")

	# Update the code with the new function definition at the end
	updated_code = original_code[:target_line] + [new_onsubmit_line] + [new_submit_closing_line] + original_code[closing_location + 1 :] + [new_function]
	# print(f"new file: {new_submit_closing_line}")

	# Print diff (only in debug mode)
	# if debug_mode:
	# 	diff = unified_diff(original_code, updated_code, fromfile=file_path, tofile=file_path)
	# 	for line in diff:
	# 		print(line, end="")

	# Write the updated code to a new file (optional, uncomment if needed)
	new_file_name = os.path.splitext(file_path)[0] + "_ExportSubmit.jsx"
	with open(new_file_name, "w") as f:
		f.writelines(updated_code)

	# Write the updated code to the original file (uncomment for in-place modification)
	# with open(file_path, "w") as f:
	# 	f.writelines(updated_code)
	if debug_mode:
		print(f"Successfully processed {new_file_name}.")  # Updated success message


# Parse command line arguments
import argparse
def dir_path(string):
    if os.path.isdir(string):
        return string
    else:
        raise NotADirectoryError(string)
parser = argparse.ArgumentParser(description="Move inline functions in JSX files")
parser.add_argument("-d", "--debug", action="store_true", help="Enable debug mode with diffs")
parser.add_argument("-p", "--path", nargs='?', action="store", default="./src/ui-components", type=dir_path, help="Path to the ui-components director. Relative to calling location")
args = parser.parse_args()

# Find all Form.jsx files within 'ui-components' folder
for root, _, files in os.walk(args.path):
		for filename in files:
			if filename.endswith("CreateForm.jsx") or filename.endswith("UpdateForm.jsx") or filename == "TechCBO.jsx":
				move_inline_function(os.path.join(root, filename), args.debug)


