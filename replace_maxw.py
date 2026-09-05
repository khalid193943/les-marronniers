import re, glob
files = glob.glob("src/**/*.tsx", recursive=True)
count = 0
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    new_content = re.sub(r"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", r"max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16", content)
    if new_content != content:
        with open(f, "w", encoding="utf-8") as fp:
            fp.write(new_content)
        count += 1
print(f"Replaced in {count} files")
