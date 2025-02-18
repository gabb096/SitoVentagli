// ====================
//
// aggiungi i nuovi ventagli qui all'inizio dell'array, in fondo al file c'è l'operazione 
// allVentagli.reverse();
// che li riordina in ordine cronologico di aggiunta 
// ====================

let allVentagli = [      
    {
        "location": "FIRENZE",
        "year"  : "2025",
        "path"  : "img/42-firenzeAndreea.png",
        "votes" : [4, 4, 4, 4],
        "fanFuct": "Andreea : 'basta non gli prendo più ventagli', sempre Andreea appena ne vede uno giallo"
    },  
    {
        "location": "LISBONA (PRT)",
        "year"  : "2025",
        "path"  : "img/41-lisbonaAndreea.png",
        "votes" : [4, 3, 5, 5],
        "fanFuct": "Beh che dire amici, ho aspettato mesi per avere questo ventaglio da Andreea ma ne è valsa la pena"
    },  
    {
        "location": "VALLETTA (MLT)",
        "year"  : "2025",
        "path"  : "img/40-maltaGiorgio.png",
        "votes" : [2, 3, 3, 4],
        "fanFuct": "Semplice, d'effetto, ti fa venire voglia di andare a Malta"
    },  
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/39-romaZioPaolo.png",
        "votes" : [2, 1, 2, 2],
        "fanFuct": "Ha sicuramente visto giorni migliori, si vede che è vecchiotto ma il fatto che sia di paglia lo rende particolare"
    },  
    {
        "location": "MALAGA (SPA)",
        "year"  : "2024",
        "path"  : "img/38-malagaGiorgia.png",
        "votes" : [3, 3, 5, 2],
        "fanFuct": "Non avete idea di quanto tempo è passato da quando l'ha preso a quando finalmente me lo ha consegnato... C'era un pdf al posto del sito per farvi capire"
    },   
    {
        "location": "LIVERPOOL (UK)",
        "year"  : "2024",
        "path"  : "img/37-liverpoolMartina.png",
        "votes" : [5, 5, 5, 5],
        "fanFuct": "PERIOOOOOD"
    },   
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/36-firenzeTommaso.png",
        "votes" : [3, 2, 4, 3],
        "fanFuct": "È un ventaglio antico, viene dalla cina, probabilmente dirà qualcosa del tipo '比萨狗屎'"
    },   
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/35-compleannoGiorgio.png",
        "votes" : [2, 1, 5, 5],
        "fanFuct": "C'è poco da dire, il miglior regalo di compleanno che uno possa desiderare, direi che siamo tutti d'accordo no?"
    },   
    {
        "location": "Murgia (SPA)",
        "year"  : "2024",
        "path"  : "img/34-murciaLudo.png",
        "votes" : [1, 1, 3, 3],
        "fanFuct": "Sicuro in spagna stanno più in forma di me che per hobby colleziono ventagli e passo serate ad aggiornare sto sito..."
    },   
    {
        "location": "Murgia (SPA)",
        "year"  : "2024",
        "path"  : "img/33-murciaLudo.png",
        "votes" : [1, 1, 3, 3],
        "fanFuct": "Ma poi bellissimo che hai robe completamente sconnesse tra loro sullo stesso volantino"
    },   
    {
        "location": "Murgia (SPA)",
        "year"  : "2024",
        "path"  : "img/32-murciaLudo.png",
        "votes" : [1, 1, 3, 3],
        "fanFuct": "Sei in un paese caldo e devi fare pubblicità? Facile, ventagli-volantino! Il paradiso esiste e chi ci abita sa come fare marketing"
    },   
    {
        "location": "SUBIACO (RM)",
        "year"  : "2024",
        "path"  : "img/31-subiacoLucrezia.png",
        "votes" : [3, 3, 4, 3],
        "fanFuct": "Tra le varie passioni in comune con la gentil Lucrezia, troviamo quelle per gatti e ventagli.Quale miglior esemplare poteva celebrare questo connubio?"
    },   
    {
        "location": "TREVISO",
        "year"  : "2024",
        "path"  : "img/30-trevisoGenitori.png",
        "votes" : [3, 3, 3, 4],
        "fanFuct": "Con fare avventuriero i miei avi si sono spinti fino al confine dell’Italico Regno, in quel di Treviso, alla ricerca di un esemplare effervescente e spiritoso. Rientrarono all’Urbe con segni di successo e vittoria."
    },   
    {
        "location": "SAN VITO DEI NORMANNI (BA)",
        "year"  : "2024",
        "path"  : "img/29-pugliaChiara.png",
        "votes" : [3, 2, 4, 4],
        "fanFuct": "L’Apriliana Chiara, dopo aver sofferto una grave lesione alla gamba si è recata nel negozio del Mestro Gaetano abile venditore di  San Vito dei Normanni, è stato preso questo magnifico souvenir di Alberobello."
    },   
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/28-romaZioPaolo.png",
        "votes" : [2, 2, 2, 2],
        "fanFuct": "È pieno di fili trasparenti che tengono uniti i pezzetti di legno quando lo apri.Sembra fragile, è fragile, va trattato con cura."
    },     
    {
        "location": "APRILIA (LT)",
        "year"  : "2024",
        "path"  : "img/27-cocommero.png",
        "votes" : [3, 2, 4, 3],
        "fanFuct": "Questo è stato acquisto a prima vista, non potevo lasciarlo alla Mondadori di Aprilia durante la notte bianca. Quella libreria era rimasta aperta per noi e andava omaggiata."
    }, 
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/26-1DNight.png",
        "votes" : [1, 1, 4, 4],
        "fanFuct": "Al parco Schuster fanno belle serate durante l’estate, ma fanno anche la 1D Night dove centinaia di persone tra i 25 e i 30 tornano adolescenti e strillano per i loro beniamini per 3 ore filate, però per ogni consumazione regalavano dei gadget tra qui questo."
    },    
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/25-biancoMario.png",
        "votes" : [2, 3, 3, 1],
        "fanFuct": "Il buon vecchio Mario entra nella collezione con grazia ricevuta ad evento all'interno di uno studio legale al quale lavorava (all’evento non nello studio). La carta bianca altro non è che una tela che attende un’artista per raccontare una storia."
    },    
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/24-sushiMartina.png",
        "votes" : [2, 2, 3, 3],
        "fanFuct": "Può passare per pubblicità occulta ma alla fine in quel ristorante ci ho mangiato bene, questo è un altro ventaglio regalato dalla fidanzatina."
    },    
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/23-cazzoDiCaldo.png",
        "votes" : [3, 3, 4, 3],
        "fanFuct": "Quando tutta la facoltà dove hai studiato sa che hai questa malattia per i ventagli, succede che ogni tanto ti mandano foto e link… Questo è stato preso immediatamente dal sito nonsologiocattoli.com gentilmente scovato da Fiorenza."
    },    
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/22-japaneseGiorgia.png",
        "votes" : [1, 1, 3, 3],
        "fanFuct": "La tua bassista vuole diventare una tatuatrice e alla Legacy Tattoo Accademy dove studia regalano questi vestaglietta in plastica agli studenti. Non puoi privartene."
    },    
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/21-legacyGiorgia.png",
        "votes" : [1, 1, 3, 3],
        "fanFuct": "La tua bassista vuole diventare una tatuatrice e alla Legacy Tattoo Accademy dove studia regalano questi vestaglietta in plastica agli studenti. Non puoi privartene."
    },    
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/20-maxPezzali.png",
        "votes" : [5, 4, 3, 3],
        "fanFuct": "Di tutte le robe che uno può trovare al banchetto del merch, un ventaglio era l’ultima cosa che mi aspettavo, l’acquisto è stato impulsivo e la gioia immensa.Chi l’avrebbe mai detto che avrei comprato un ventaglio letteralmente dentro lo stadio Olimpico?"
    },    
    {
        "location": "ROMA",
        "year"  : "2024",
        "path"  : "img/19-sheratonMartina.png",
        "votes" : [2, 2, 2, 1],
        "fanFuct": "Se organizzi una convention all’ hotel Sheraton Golf Club Parco De’ Medici pretendi che i tuoi ospiti stiamo freschi, e se il padre della precedentemente citata fidanzatina ci lavora in questo hotel, come minimo ricevi un ventaglio."
    },    
    {
        "location": "PISA",
        "year"  : "2024",
        "path"  : "img/18-pisaMartina.png",
        "votes" : [3, 1, 4, 4],
        "fanFuct": "Di ritorno dal concerto del menestrello britannico Ed Sheeran in quel di Lucca, la dolce Martina Balsamo trova dimora nella città di Pisa, dove si imbatte in questo mini ventaglio super cutino piccino picciò."
    },    
    {
        "location": "VARSAVIA (POL)",
        "year"  : "2024",
        "path"  : "img/17-varsavia.png",
        "votes" : [2, 2, 2, 2],
        "fanFuct": "Anche la capitale polacca non aveva molto da offrire dal punto di vista della quantità di ventagli che era sempre misera. Lui, ovviamente, è stato scelto per il fiocco giallo ."
    },   
    {
        "location": "CRACOVIA (POL)",
        "year"  : "2024",
        "path"  : "img/16-cracovia.png",
        "votes" : [3, 3, 4, 3],
        "fanFuct": "Il primo souvenir dall’estero che mi sono regalato da solo. In generale la Polonia non ha offerto una grande gamma di ventagli tra cui scegliere, ma visto che in quei giorni era appena uscita la seconda parte della terza stagione di Bridgerton l’acquisto calzava a pennello."
    },
    {
        "location": "ROMA",
        "year"  : "2023",
        "path"  : "img/15-romics.png",
        "votes" : [5, 5, 3, 2],
        "fanFuct": "In quel del Romics alla Nuova fiera di Roma mi sono imbattuto in questo magnifico esemplare, e preso dalla gola l’ho immediatamente acquistato.Dopo poche settimane, nello stesso luogo ma nella cornice di Roma incontra il mondo lo si trovava a metà prezzo…"
    },
    {
        "location": "Bangkok (THA)",
        "year"  : "2023",
        "path"  : "img/14-thailandiaAndreea.png",
        "votes" : [3, 3, 4, 4],
        "fanFuct": "Questo è un souvenir da parte di Andreea F. Miroslav che ha viaggiato fino alla Tailandia per recuperare questa meraviglia.È stato preso nel lussuoso centro commerciale “Terminal 21”, il quale ha dedicato ogni piano ad una nazione diversa del mondo."
    },
    {
        "location": "HONK KONG",
        "year"  : "2023",
        "path"  : "img/13-honkKong.png",
        "votes" : [5, 5, 5, 3],
        "fanFuct": "Questo mi è stato “dato in prestito” dal prof. Carmine Di Fiore che a sua volta l’ha ricevuto in regalo da un suo collega di Honk Kong.La promessa è che se mai il suo collega tornasse a Roma io devo correre da lui in ufficio per rimettere a posto il ventaglio "
    },
    {
        "location": "LISBONA (PRT)",
        "year"  : "2023",
        "path"  : "img/12-lisbonaLadra.png",
        "votes" : [3, 3, 5, 2],
        "fanFuct": "Girovagando distratto per la “feira da ladra”, una piazza piena di persone che vendevano oggetti di qualsiasi tipo e fattura, mi sono imbattuto in questo meraviglioso ventaglio. Chissà a chi apparteneva e che storie avrà da raccontare."
    },
    {
        "location": "LISBONA (PRT)",
        "year"  : "2023",
        "path"  : "img/11-lisbona.png",
        "votes" : [5, 4, 3, 2],
        "fanFuct": "Tra i più resistenti nella collezione, questo ventaglio è in sughero e vuole omaggiare la tradizionale manifattura  portoghese che come pochi riesce a dare vita a questo magnifico materiale. Non poteva mancare nella fantasia un omaggio alle  variopinte Azulejos"
    },
    {
        "location": "NOVI SAD (SRB)",
        "year"  : "2023",
        "path"  : "img/10-bratislavaGiorgio.png",
        "votes" : [3, 3, 3, 5],
        "fanFuct": "Altro souvenir dallo stesso viaggio di Giorgio. Qui si è superato con una perla rarissa e glitterata"
    },
    {
        "location": "BUDAPEST (HUN)",
        "year"  : "2023",
        "path"  : "img/9-budapestGiorgio.png",
        "votes" : [2, 2, 3, 3],
        "fanFuct": "Il primo souvenir dall’estero lo porta a Roma l’incredibile Giorgio, con questo altrettanto incredibile esemplare. Con bontà della foto, si nota come nello skyline di Budapest sia presenta il cartellone pubblicitario di Dior."
    },
    {
        "location": "FIUMICINO (RM)",
        "year"  : "2023",
        "path"  : "img/8-fiumicino.png",
        "votes" : [2, 2, 3, 3],
        "fanFuct": "L’ho preso nel   tipico  negozio a conduzione familiare cinese che si affaccia sul canale di Fiumicino, molto elegante ma fa poca aria."
    },
    {
        "location": "CAPRI (NA)",
        "year"  : "2023",
        "path"  : "img/7-capriTrash.png",
        "votes" : [2, 2, 4, 3],
        "fanFuct": "Possiamo tranquillamente  affermare che con questo ventaglio è cominciata la tradizione di collezionare e farsi regalare i ventagli più trash in assoluto."
    },
    {
        "location": "GROTTAFERRATA (RM)",
        "year"  : "2023",
        "path"  : "img/6-fieraGrottaferrata.png",
        "votes" : [4, 4, 4, 1],
        "fanFuct": "Alla Fiera Internazionale di Grottaferrata di solito si trovano cibo, letti, poltrone e roba per la casa. Ma quella volta c’era anche una perla. Il rivestimento in sughero e tela unito allo straordinario pattern lo rendono tra i più apprezzati nell’intera collezione"
    },
    {
        "location": "CAPRI (NA)",
        "year"  : "2022",
        "path"  : "img/5-capriLimoni.png",
        "votes" : [3, 3, 4, 2],
        "fanFuct": "I limoni, le maioliche e il fatto che è stato preso da una sdraio a bordo piscina di un hotel di lusso nel quale lavora lo zio della tua fidanzatina e poi portato a casa della nonna, sarebbe stato un peccato non portarlo a Roma"
    },
    {
        "location": "FRATTOCCHIE (RM)",
        "year"  : "2022",
        "path"  : "img/4-carrefour.png",
        "votes" : [3, 3, 3, 2],
        "fanFuct": "Stando in fila al Carrefour ci si guarda intorno e lì l’ho trovato, con questo è cominciata la delirante idea di collezionare ventagli, e non me ne pento ancora. Era circondato da altri suoi simili ma il pattern marino lo rende perfetto per l’estate."
    },
    {
        "location": "TOR VERGATA (RM)",
        "year"  : "2020",
        "path"  : "img/3-marinaMilitare.png",
        "votes" : [2, 2, 2, 2],
        "fanFuct" : "Questo meraviglioso ventaglio mi è stato regalato dal buon vecchio Domenico, che a sua volta l’ha ricevuto dal padre che a sua volta lo prese ad una Convention della marina militare. Abbiamo i giusti agganci qui."
    },
    {
        "location": "CASERTA",
        "year"  : "2019",
        "path"  : "img/2-caserta.png",
        "votes" : [3, 2, 4, 4],
        "fanFuct" : "Questo ventaglio è entrato in mio possesso tramite la nobile e antica arte del furto.Eravamo nella pittoresca  Reggia di Caserta, lui era abbandonato sopra ad un elegante davanzale, che fai lo lasci lì da solo?"
    },
    {
        "location": "CIAMPINO (RM)",
        "year"  : "Tra il 2015 e il 2019",
        "path"  : "img/1-madcow.png",
        "votes" : [2, 2, 1, 1],
        "fanFuct" : "Questo ventaglio lo usavo a lavoro davanti la griglia del ristorante Mad Cow durante le caldi estati Ciampinesi, li regalavano ai clienti e io ne ho usati / rotti a decine. Questo è l’unico che mi è rimasto."
    }
];
allVentagli.reverse();