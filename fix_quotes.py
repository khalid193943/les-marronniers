import re
with open("src/components/ParentCommunitySection.tsx", "r") as f:
    code = f.read()
code = code.replace("Parent Stories", "Paroles de Parents")
code = code.replace("Loved by Children, Trusted by Families", "Aimés des Enfants, Approuvés par les Familles")
with open("src/components/ParentCommunitySection.tsx", "w") as f:
    f.write(code)
