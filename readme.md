# Reactive Clients
Ein Referat von Tobias Kneidinger

## Quickstart
> npm start

zum Ausführen im **Project-Root** ausführen!

## Was ist ReactiveX?

*ReactiveX (Reactive Extensions)* ist eine Library, die Entwickler bei der Erstellung von *asynchronen Event-basierten Systemen* unterstützt. Diese Library ist für die meisten gängigen Plattformen und Sprachen verfügbar, wie z.B.:
* Javascript (RxJS)
* Java (RxJava)
* .NET
* Scala
* Swift
* Android (Java und Kotlin)
* Python
* ...

Es werden dabei verschiedenste **Extension-Methods** zur Verfügung gestellt, welche verschiedenste Funktionen erfüllen können. Meist werden dabei Rx-Observables zurückgegeben.

Beispiel:

Die Extension-Methode
``` javascript
interval(1000).subscribe(i => console.log(i));
```
verhält sich genau wie
``` javascript
let counter = 0;
setInterval(() => {
    counter++;
    console.log(counter);
}, 1000);
```

Beide Code-Snippets erhöhen jede Sekunde einen Counter und geben diesen auf der Konsole aus. Das RxJS-Beispiel ist hierbei um einiges kürzer und vor allem übersichtlicher.

## Warum ReactiveX?
* Vermeidung der "Callback-Hell" (Schachtelung von Asynchronen Callbacks)
* Vereinfachung des asynchronen Codes
* Viele Operatoren auf Streams möglich (map, take, drop, ...)

## Stream of Values
"Stream of values" ist eines der weit verbreitetsten Konzepte in der event-basierten Programmierung. Dabei werden Streams erstellt, welche einen oder mehrere Werte liefern können. Diese Streams können auch completed (beendet) werden. Beispiele hierfür in Javascript wären 
* "setTimeout", 
* "setInterval" oder auch 
* "document.addEventListener(...)". 

Dieses Konzept ist eng mit der **ReactiveX** Library verbunden: Hier werden diese **Streams mit Observables kombiniert**.

## Observables
Observables sind **Blueprints von "Streams of Values"**.  
*Beispiel*: Die Extension-Method
``` javascript
const interval$ = interval(1000)
```

gibt beispielsweise ein Observable zurück, auf welches beliebig oft subscribed werden kann. Wird beispielsweise 2 mal subscribet, werden 2 verschiedene Streams of Values erstellt. Es werden also jede Sekunde 2 Werte pro Stream emittet. Um zu vermeiden, dass mehrere Streams erstellt werden, sondern nur einen einzigen zu verwenden, wird der Operator *shareReplay* verwendet.

Die Benennung mit dem **$-Zeichen** gibt an, dass dieses Objekt ein Observable ist.

### subscribe
Die subscribe-Methode nimmt 3 Parameter entgegen:
1. **value-Callback**: Wird aufgerufen, wenn der Stream einen neuen Wert liefert.
2. **error-Callback**: Wird dei Fehlerfällen aufgerufen. Beendet den Stream! (optional)
3. **completion-Callback**: Wird beim Abschluss des Streams aufgerufen. (optional)

Es wird ein "Subscription"-Objekt zurückgegeben, welches verwendet wird, um sich unter anderem von dem Stream zu unsubscriben.

Werden Observables selbst definiert, muss darauf geachtet werden, dass diese den **Observable-Contract** nicht verletzen. Dieser gibt an, dass nach dem Abschluss des Observables bzw. nach einem Fehler keine Werte mehr emittet werden.

Unterschied zu **Promises**: Bei Promises wird die übergebene Funktion / der Stream sofort getriggert, bei Observables erst bei Aufruf der subscribe-Methode! 

Auch wenn wie z.B. bei der fetch-api schon Promises zurückgegeben werden, ist es dennoch sinnvoll diese in Observables umzuwandeln. Dadurch können verschiedenste Operatoren auf das Objekt angewendet werden, um beispielsweise die Response zu bearbeiten.

## Reactive Design
Es sollte vermieden werden, die Logik in dem subscribe-Callback zu programmieren, um die Lesbarkeit des Codes zu bewahren. dafür wurde **Reactive Design** entwickelt.

In *Angular* wird dies folgendermaßen realisiert:

Es wird im Typescript-File ein Observable angelegt. Auf dieses Observable wird sich aus dem HTML-File über die **"async"-Pipe** automatisch subscribed und auch wenn nötig wieder unsubscribed. *Dadurch wird die Logik in die dafür vorgesehenen Pipes auf die nötigen Operatoren ausgelagert.*

Dieses Design macht den Code **extrem gut lesbar** und übernimmt auch automatisch das **Updaten der View**, da durch die automatische Subscription automatisch die Daten an die View weitergeleitet werden. Auch **geschachtelte Subscriptions werden dadurch vermieden**.



## Vorschläge zu Fragen
1. Wodurch unterstützt ReactiveX die Entwicklung reaktiver Clients?
1. Was ist ein "Stream of Values" und wo wird er verwendet?
1. Was sagt der Observable-Contract aus?
1. Welche Vorteile bringt Reactive Design?