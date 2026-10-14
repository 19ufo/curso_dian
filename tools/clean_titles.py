import re

path = r"e:\Varios\Concursos CNSC\11. DIAN 2676 - 2026\IA\3_Aplicativo_Interactivo\js\data.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Reemplazar títulos que comienzan con dígitos como "1. ", "16. "
cleaned = re.sub(r'\"title\":\s*\"(\d+)\.\s+([^"]+)\"', r'"title": "\2"', content)

with open(path, "w", encoding="utf-8") as f:
    f.write(cleaned)

print("data.js limpiado con éxito.")
