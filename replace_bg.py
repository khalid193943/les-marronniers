import re, glob
files = glob.glob("src/**/*.tsx", recursive=True)
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    new_content = re.sub(r"className=\"([^\"]*)bg-white( [^\"]*p-\d+[^\"]*shadow[^\"]*)\"", r"className=\"\1bg-[#e6ccb2]\2\"", content)
    new_content = re.sub(r"className=\"([^\"]*)bg-white( [^\"]*overflow-hidden[^\"]*shadow[^\"]*)\"", r"className=\"\1bg-[#e6ccb2]\2\"", new_content)
    new_content = re.sub(r"className=\"bg-white( p-\d+[^\"]*shadow[^\"]*)\"", r"className=\"bg-[#e6ccb2]\1\"", new_content)
    new_content = re.sub(r"className=\"bg-white( overflow-hidden[^\"]*shadow[^\"]*)\"", r"className=\"bg-[#e6ccb2]\1\"", new_content)

    if new_content != content:
        with open(f, "w", encoding="utf-8") as fp:
            fp.write(new_content)
        print(f"Replaced in {f}")
