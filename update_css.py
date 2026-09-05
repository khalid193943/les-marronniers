import re
with open("src/index.css", "r") as f:
    css = f.read()
# change border-radius: 0px to border-radius: 9999px for giggle-tag
css = re.sub(r"border-radius:\s*0px\s*!important;", "border-radius: 9999px;", css)
with open("src/index.css", "w") as f:
    f.write(css)
