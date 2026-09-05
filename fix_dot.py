import re
with open("src/index.css", "r") as f:
    css = f.read()
# Make dot square again
css = re.sub(r"(\.giggle-dot \{[\s\S]*?border-radius:\s*)9999px;", r"\1 0px;", css)
with open("src/index.css", "w") as f:
    f.write(css)
