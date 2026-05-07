import os, unicodedata

def clr(): os.system('cls')

def nom_conv(nom_complet):
    # Agafar només el primer nom
    nom_primer = nom_complet.split()[0]
    # Convertir a minúscules
    nom_lower = nom_primer.lower()
    # Treure accents
    nom_final = ''.join(
        c for c in unicodedata.normalize('NFD', nom_lower)
        if unicodedata.category(c) != 'Mn'
    )
    return nom_final

banner = r"""
                   ..|'''.|                   '||                         
                  .|'     '  ... ...  ... ..   || ...                     
                  ||    ....  ||  ||   ||' ''  ||'  ||                    
                  '|.    ||   ||  ||   ||      ||    |                    
                   ''|...'|   '|..'|. .||.     '|...'                     
                                                                          
                                                                          
'||''|.                                                              '||  
 ||   ||  ....    ....  ... ... ... ... ... ...   ...   ... ..     .. ||  
 ||...|' '' .||  ||. '   ||  ||  |   ||  ||  |  .|  '|.  ||' ''  .'  '||  
 ||      .|' ||  . '|..   ||| |||     ||| |||   ||   ||  ||      |.   ||  
.||.     '|..'|' |'..|'    |   |       |   |     '|..|' .||.     '|..'||. 

"""

class Colors: #colors
    """ ANSI color codes """
    RED = "\033[38;5;196m"
    GREEN = "\033[0;32m"
    END = "\033[0m"
#agafar nom i majs
while True: #agafar nom i cognom i comprovar que tot sigui correcte
    print(banner)
    p = 0
    try:
        nom = input("Introdueix el nom i Cognom de la Víctima (Útilitza correctament les majúscules): ");majs = []
    except ValueError:
        print(f"{Colors.RED}Només nom i primer Cognom{Colors.END}")
        input("Prem ENTER per continuar...")
        clr()
        continue
    else:
        for n in nom.strip():
            if n == " ": p+=1
        if p != 1:
            print(f"{Colors.RED}Només nom i primer Cognom{Colors.END}")
            input("Prem ENTER per continuar...")   
            clr() 
            continue
        else: break
    

for i in nom.replace(" ",""):
    if (i.upper()) == i: majs.append(i)

ruta = rf"\\wsl.localhost\Ubuntu-22.04\home\asus\carpeta\{nom_conv(nom)}.txt" #var de ruta, pq es complicada

# Recorrem tots els dígits possibles per cada posició
with open(ruta, "w") as archivo:
    for i in range(10):
        for j in range(10):
            for k in range(10):
                linea = f"{majs[0].lower()}{majs[1].lower()}{str(i)*2}{str(j)*2}{str(k)*2}"
                archivo.write(linea + "\n")  # Escriu al fitxer

print(f"El fitxer s'ha guardat a descàrregues amb el nom de {nom_conv(nom)}.txt")
input("Prem ENTER per finalitar el programa.")