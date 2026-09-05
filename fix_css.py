import re
with open("src/index.css", "r") as f:
    css = f.read()

# Remove the global zero border radius mandate
css = re.sub(r"/\*[\s\*]*ZERO BORDER RADIUS MANDATE[\s\S]*?}\n\n", "", css)

# Make giggle tag rounded
css = re.sub(r"(\.giggle-tag \{[\s\S]*?border-radius:\s*)0px\s*!important;", r"\1 9999px;", css)
css = re.sub(r"(\.giggle-tag \{[\s\S]*?background-color:\s*)rgba\(8, 66, 116, 0.1\);", r"\1 rgba(0, 0, 0, 0.05);", css)

# Make dot rounded
css = re.sub(r"(\.giggle-dot \{[\s\S]*?border-radius:\s*)0px\s*!important;", r"\1 9999px;", css)
css = re.sub(r"(\.giggle-button-primary \{[\s\S]*?border-radius:\s*)0px\s*!important;", r"\1 9999px;", css)
css = re.sub(r"(\.giggle-button-secondary \{[\s\S]*?border-radius:\s*)0px\s*!important;", r"\1 9999px;", css)
css = re.sub(r"(\.giggle-button-accent \{[\s\S]*?border-radius:\s*)0px\s*!important;", r"\1 9999px;", css)

# Tilted bento backgrounds don't need !important
css = re.sub(r"(\.tilted-blue-bg \{[\s\S]*?border-radius:\s*)0px\s*!important;", r"\1 0px;", css)
css = re.sub(r"(\.tilted-orange-bg \{[\s\S]*?border-radius:\s*)0px\s*!important;", r"\1 0px;", css)

with open("src/index.css", "w") as f:
    f.write(css)
