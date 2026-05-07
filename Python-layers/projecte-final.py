#la meva idea inicial és fer un generador d'excuses absurdes

#primer importaré random, ja que per aquest projecte el necessitaré
import random,os

historial = []

subjecte = [ #llista de subjectes
        "el meu gos", "un pingüí ninja", "un robot amb son", "un alien despistat",
        "un hacker de 8 anys", "una cabra amb actitud"
    ]
accio = [ #que han fet els subjectes
        "ha esborrat el meu treball", "ha canviat els noms dels fitxers",
        "ha confós el meu USB amb una galeta", "ha bloquejat l'ordinador",
        "ha enviat el document a una altra dimensió"
    ]
lloc = [ #a on?
        "a la biblioteca", "al bus", "a classe", "a casa", "al passadís"
    ]
moment = [ #quan
        "ahir a la nit", "fa 5 minuts", "just abans de començar classe",
        "quan ho anava a entregar"
    ]
final = [ #per finalitzar la frase
        "i ara no ho trobo enlloc.", "i ningú sap com arreglar-ho.",
        "i ha estat un caos total.", "i això mereix una pel·lícula.",
        "i el destí ha decidit riure's de mi."
    ]

#funcións
def clear(): os.system('cls' if os.name == 'nt' else 'clear')

def preguntes(llista): #funció per mostrar preguntes
    n=0
    print("0. Aleatori")
    for i in llista:
        n+=1
        print(f"{n}. {i}")
    while True:
        try: 
            x = int(input(">> "))
            if (x > len(llista)) or (x < 0):
                print("Opcció invàlida")
                print() #crear espai
                continue
        except:
            print("Opcció invàlida")
            print()
        else:
            break
    return x

def aleatori(llista):
    x = random.randrange(0,len(llista))
    return llista[x]

def triar(llista):
    x = preguntes(llista)
    print()
    if x != 0:
        return llista[x-1]
    else: 
        return aleatori(llista)

def formar():
    print("Subjecte:")
    a = triar(subjecte)
    print("Acció: ")
    b = triar(accio)
    print("Lloc: ")
    c = triar(lloc)
    print("Moment: ")
    d = triar(moment)
    print("Final: ")
    e = triar(final)
    return f"No he pogut entregar-ho perquè {a} {b} {c} {d}, {e}"

def mostra_historial():
    print("Historial:")
    n = 0
    for i in historial:
        n+=1
        print(f"{n}. {i}")
    input("Prem ENTER per continuar...")
    clear()

def menu():
    while True:
        print("---Generador d'excuses---")
        print("1. Generar excusa")
        print("2. Veure Historial")
        print("3. Sortir")
        try:
            r = int(input(">> "))
            if (r < 1) or (r > 3):
                print("Escull una opció (1,2 o 3)")
                input("Prem ENTER per continuar...")
                clear()
                continue
        except:
            print("Escull una opció (1,2 o 3)")
            input("Prem ENTER per continuar...")
            clear()
            continue
        else:
            break
    return r

while True:
    res = menu()

    if res == 3:
        print("Gràcies per utilitzar el programa!")
        break
    elif res == 2:
        mostra_historial()
    else:
        frase = formar()
        print(frase)
        historial.append(frase)
        input("Prem ENTER per continuar")
        clear()