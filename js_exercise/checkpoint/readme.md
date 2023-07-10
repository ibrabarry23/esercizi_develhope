Un pacchetto di parametri di modello è un parametro di modello che accetta zero o più argomenti di modello (non tipi, tipi o modelli). Per saperne di più sul pacchetto di parametri, fare clic qui.

Crea una funzione modello denominata reversed_binary_value. Deve accettare un numero arbitrario di valori bool come parametri del modello. Questi valori booleani rappresentano le cifre binarie in ordine inverso. La tua funzione deve restituire un numero intero corrispondente al valore binario delle cifre rappresentate dai valori booleani. Ad esempio: reversed_binary_value<0,0,1>() dovrebbe restituire .

Formato di input

La prima riga contiene un numero intero, , il numero di test case. Ognuna delle righe successive contiene un test case. Un caso di test è descritto rispettivamente come numeri interi separati da spazio e .

  è il valore da confrontare.
  rappresenta l'intervallo da confrontare: a .
Vincoli

Il numero di parametri del modello passati a reversed_binary_value sarà .
Formato di output

Ogni riga di output contiene caratteri binari (ad esempio, 's e 's). Ogni carattere rappresenta un valore nell'intervallo. Il primo carattere corrisponde al primo valore nell'intervallo. L'ultimo carattere corrisponde all'ultimo valore nell'intervallo. Il carattere è se il valore nell'intervallo corrisponde a ; in caso contrario, il carattere è .

Esempio di input

2
65 1
10 0
Esempio di output

0100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Spiegazione

Il secondo carattere sulla prima riga è a , perché il secondo valore nell'intervallo è ed è .

L'undicesimo carattere sulla seconda riga è a , perché l'undicesimo valore nell'intervallo è ed è .

Tutti gli altri caratteri sono zero, perché i valori corrispondenti nell'intervallo non corrispondono.