// MyHabboPlus Languages
var prefLang;
var text;
function loadLang() {
    if(prefLang=="en"){
                myhpLang="en"; // English
            }else  if(prefLang=="es"){
                myhpLang="es"; // Spanish
            }else if(prefLang=="pt"){
                myhpLang="pt"; // Portuguese
            }else if(prefLang=="fr"){
                myhpLang="fr"; // French
            }else if(prefLang=="it"){
                myhpLang="it"; // Italian
            }else if(prefLang=="de"){
                myhpLang="de"; // Deutsch
            }else if(prefLang=="tr"){
                myhpLang="tr"; // Turkish
            }else if(prefLang=="fi"){
                myhpLang="fi"; // Finnish
            }else{
                myhpLang=navigator.language.match(/[a-z]+/); // Auto detection.
            }
            if(myhpLang=="es") {

                text= {
                    "Close": "Cerrar",
                    "Error": "Error",
                    "Attention": "¡Atención!",
                    "NoConnect": "Error de conexión.",
                    "Loading": "Cargando...",
                    "Hour": "Hora",
                    "Hours": "Horas",
                    "Day": "Día",
                    "Days": "Días",
                    "Week": "Semana",
                    "Weeks": "Semanas",
                    "Never": "Nunca",
                    "ChangeColor":"Cambiar de color",

                    "LightboxTitle": "¡Atención!",
                    "Preferences": "Preferencias",
                    "PreferencesGeneral": "General",
                    "PreferencesVersion": "Versión",
                    "PreferencesUpdate": "Buscar actualizaciones",
                    "PreferencesUpdateFreq": "Frecuencia de búsqueda de actualizaciones",
                    "PreferencesUpdateChannel": "Canal de actualización",
                    "PreferencesUpdateChannelRelease": "Versiones finales (Recomendado)",
                    "PreferencesUpdateChannelBeta": "Beta",
                    "PreferencesUpdateChannelCustom": "Personalizado (Para expertos)",
                    "Language": "Idioma",
                    "LanguageAuto": "Detectar automáticamente",
                    "PreferencesModules": "Módulos",
                    "PreferencesTheme": "Tema alternativo",
                    "PreferencesHomeInfo": "Información en Habbo Home",
                    "PreferencesHabboSearch": "Buscador de habbos",
                    "PreferencesNewArticles": "Alerta de nuevas noticias",
                    "PreferencesTweet": "Mostrar Tweets de web fans",
                    "PreferencesAbout":"Acerca de MyHabboPlus",

                    "HomeInfoDetails": "Detalles de usuario",
                    "HomeInfoNoExist": "Este Habbo no existe.",
                    "HomeInfoAddFriend": "Añadir como amig@",
                    "HomeInfoAddError": "Ha habido un error al enviar la solicitud de amistad.",
                    "HomeInfoDate": "En Habbo desde:",
                    "HomeInfoStatus": "Estado:",
                    "HomeInfoLastVisit": "Último acceso:",
                    "HomeInfoFriends": "Amigos",
                    "HomeInfoFriendSearch": "Buscar...",
                    "HomeInfoFriendsCommon": "Amigos en común",
                    "HomeInfoFriendsCommonZero": "No tienes ningún amigo en común.",
                    "HomeInfoFriendsCommonYou": "Solo puedes comparar tus amigos con otros habbos.",
                    "HomeInfoFriendsCommonLogin": "Necesitas iniciar sesión para comparar tus amigos.",
                    "HomeInfoBadges": "Placas",
                    "HomeInfoRooms": "Salas",
                    "HomeInfoNoRooms": "No tienes Salas",
                    "HomeInfoGroups": "Grupos",
                    "HomeInfoNoGroups": "No eres miembro de ningún Grupo",
                    "HomeInfoRatings": "Votos",

                    "HabboSearchPlaceholder": "Buscar Habbo...",

                    "NewArticles": "Alertar de nuevas noticias",
                    "NewArticlesSearching": "Buscando nuevas noticias...",
                    "NewArticlesTitle": "¡Nueva noticia!",
                    "NewArticlesDetected": "Nueva noticia encontrada. Haz click aquí.",

                    "UpdaterNewTitle": "Nueva actualización",
                    "UpdaterNewText": "Nueva actualización encontrada:",
                    "UpdaterUpdate": "Actualizar ahora",
                    "UpdaterNoTitle": "No hay nuevas actualizaciones",
                    "UpdaterNoText": "No ha sido detectada ninguna actualización. Estás ejecutando la última versión de MyHabboPlus.",
                    "UpdaterErrorTitle": "Error al buscar actualizaciones",
                    "UpdaterErrorText": "No ha sido posible conectar con el canal de actualización."
                };
            }else if(myhpLang=="pt") {
                    // Portuguese by ,desativaado.
                    text= {
                        "Close": "Fechar",
                        "Error": "Erro",
                        "Attention": "Attention!",
                        "NoConnect": "Erro de conexão",
                        "Loading": "Carregando...",
                        "Hour": "Hora",
                        "Hours": "Horas",
                        "Day": "Dia",
                        "Days": "Dias",
                        "Week": "Semana",
                        "Weeks": "Semanas",
                        "Never": "Nunca",
                        "ChangeColor":"Alterar cor",

                        "LightboxTitle": "Atenção!",
                        "Preferences": "Preferências",
                        "PreferencesGeneral": "Geral",
                        "PreferencesVersion": "Versão",
                        "PreferencesUpdate": "Procurar por atualizações",
                        "PreferencesUpdateFreq": "Atualizações frequentes",
                        "PreferencesUpdateChannel": "Atualização de canais",
                        "PreferencesUpdateChannelRelease": "Versões finais (recomendado)",
                        "PreferencesUpdateChannelBeta": "Beta",
                        "PreferencesUpdateChannelCustom": "Personalizado (para especialistas)",
                        "Language": "Idioma",
                        "LanguageAuto": "Detecção automática",
                        "PreferencesModules": "Módulos",
                        "PreferencesTheme": "Tema alternativo",
                        "PreferencesHomeInfo": "Informação do Habbo",
                        "PreferencesHabboSearch": "Pesquise por usuário Habbo",
                        "PreferencesNewArticles": "Alerta para novos artigos",
                        "PreferencesTweet": "Mostrar tweets de fã sites",
                        "PreferencesAbout":"About MyHabboPlus",//change

                        "HomeInfoDetails": "Detalhes do usuário",
                        "HomeInfoNoExist": "Este Habbo não existe.",
                        "HomeInfoAddFriend": "Adicionar como amigo",
                        "HomeInfoAddError": "Houve um erro ao solicitar a amizade.",
                        "HomeInfoDate": "Sou usuário Habbo desde:",
                        "HomeInfoStatus": "Status:",
                        "HomeInfoLastVisit": "Último login:",
                        "HomeInfoFriends": "Friends",
                        "HomeInfoFriendSearch": "Pesquisar...",
                        "HomeInfoFriendsCommon": "Friends in common",//change
                        "HomeInfoFriendsCommonZero": "You don't have any friends in common.",//change
                        "HomeInfoFriendsCommonYou": "You can only compare your friends with other habbos.",//change
                        "HomeInfoFriendsCommonLogin": "You need to login to compare your friends.",//change
                        "HomeInfoBadges": "Emblemas",
                        "HomeInfoRooms": "Quartos",
                        "HomeInfoNoRooms": "Você ainda não tem nenhum Quarto.",
                        "HomeInfoGroups": "Grupos",
                        "HomeInfoNoGroups": "Você ainda não é membro de um Grupo.",
                        "HomeInfoRatings": "Votos",

                        "HabboSearchPlaceholder": "Pesquisar usuário Habbo...",

                        "NewArticles": "Alerta para novos artigos",
                        "NewArticlesSearching": "Pesquisando novos artigos...",
                        "NewArticlesTitle": "Nova notícia!",
                        "NewArticlesDetected": "Nova notícia encontrada. Clique aqui.",

                        "UpdaterNewTitle": "Nova atualização",
                        "UpdaterNewText": "Nova atualização encontrada:",
                        "UpdaterUpdate": "Atualize agora",
                        "UpdaterNoTitle": "Não há novas atualização",
                        "UpdaterNoText": "Nenhuma atualização encontrada, você está usando a versão mais recente do MyHabboPlus.",
                        "UpdaterErrorTitle": "Houve um erro ao tentar buscar novas atualizações",
                        "UpdaterErrorText": "Não foi possível conectar com o canal de atualizações."
                    }; 
                }else if(myhpLang=="fr") {
             // French by Matou19
             text= {
                "Close": "Fermer",
                "Error": "Erreur",
                "Attention": "Attention!",
                "NoConnect": "Connexion erreur",
                "Loading": "Chargement...",
                "Hour": "Heure",
                "Hours": "Heures",
                "Day": "Jour",
                "Days": "Jours",
                "Week": "Semaine",
                "Weeks": "Semaine",
                "Never": "Jamais",
                "ChangeColor":"Changer de couleur",

                "LightboxTitle": "Attention!",
                "Preferences": "Préférence",
                "PreferencesGeneral": "Général",
                "PreferencesVersion": "Version",
                "PreferencesUpdate": "Recherche de mises à jour",
                "PreferencesUpdateFreq": "Fréquence de mises à jour",
                "PreferencesUpdateChannel": "Mises à jour de la chaîne",
                "PreferencesUpdateChannelRelease": "Dernières mises à jour de la chaîne",
                "PreferencesUpdateChannelBeta": "Beta",
                "PreferencesUpdateChannelCustom": "Personnalisé (pour les experts)",
                "Language": "Langage",
                "LanguageAuto": "Auto-détection",
                "PreferencesModules": "Modules",
                "PreferencesTheme": "Thème alternatif",
                "PreferencesHomeInfo": "Habbo Home Infos",
                "PreferencesHabboSearch": "Rechercher un habbo",
                "PreferencesNewArticles": "Alertes de nouveaux articles",
                "PreferencesTweet": "Voir les tweets des fansites",
                "PreferencesAbout":"About MyHabboPlus",//change

                "HomeInfoDetails": "Informations sur l'utilisateur",
                "HomeInfoNoExist": "Ce Habbo n'existe pas.",
                "HomeInfoAddFriend": "Ajouter en ami",
                "HomeInfoAddError": "Une erreur est survenue lors de la demande d'ajout en amis",
                "HomeInfoDate": "Habbo crée le:",
                "HomeInfoStatus": "Mission:",
                "HomeInfoLastVisit": "Dernière connexion:",
                "HomeInfoFriends": "Amis",
                "HomeInfoFriendSearch": "Recherche...",
                "HomeInfoFriendsCommon": "Friends in common",//change
                "HomeInfoFriendsCommonZero": "You don't have any friends in common.",//change
                "HomeInfoFriendsCommonYou": "You can only compare your friends with other habbos.",//change
                "HomeInfoFriendsCommonLogin": "You need to login to compare your friends.",//change
                "HomeInfoBadges": "Badges",
                "HomeInfoRooms": "Apparts",
                "HomeInfoNoRooms": "Tu n'as pas d'appart",
                "HomeInfoGroups": "Groupes",
                "HomeInfoNoGroups": "Tu ne fais partie d''aucun groupe",
                "HomeInfoRatings": "Votes",

                "HabboSearchPlaceholder": "Recherche de Habbos…",

                "NewArticles": "Alertes de nouveaux articles",
                "NewArticlesSearching": "Recherche d'articles en cours...",
                "NewArticlesTitle": "Nouvel article!",
                "NewArticlesDetected": "Nouvel article trouvé. Cliquez ici.",

                "UpdaterNewTitle": "Nouvelle mise à jour",
                "UpdaterNewText": "Nouvelle mise à jour trouvée:",
                "UpdaterUpdate": "Mettre à jour maintenant",
                "UpdaterNoTitle": "Aucune nouvelle mise à jour disponible",
                "UpdaterNoText": "Aucune mise à jour à effectuer. Vous utilisez la dernière version.",
                "UpdaterErrorTitle": "Erreur de recherche de nouvelles mises à jour",
                "UpdaterErrorText": "Aucune connexion possible au serveur de mise à jour"
            };
        }else if(myhpLang=="it") {
             // Italian by Gabbo...
             text= {
                "Close": "Chiudi",
                "Error": "Errore",
                "Attention": "Attenzione!",
                "NoConnect": "Errore di connessione.",
                "Loading": "Caricamento...",
                "Hour": "Ora",
                "Hours": "Ore",
                "Day": "Giorno",
                "Days": "Giorni",
                "Week": "Settimana",
                "Weeks": "Settimane",
                "Never": "Mai",
                "ChangeColor":"Cambia colore",

                "LightboxTitle": "Attenzione!",
                "Preferences": "Opzioni",
                "PreferencesGeneral": "Generale",
                "PreferencesVersion": "Versine",
                "PreferencesUpdate": "Cerca aggiornamenti",
                "PreferencesUpdateFreq": "Frequenza di aggiornamento",
                "PreferencesUpdateChannel": "Tipo di versione",
                "PreferencesUpdateChannelRelease": "Versione finale (Consigliato)",
                "PreferencesUpdateChannelBeta": "Beta",
                "PreferencesUpdateChannelCustom": "Personalizzato (Esperti)",
                "Language": "Lingua",
                "LanguageAuto": "Identificazione Auto",
                "PreferencesModules": "Modules",
                "PreferencesTheme": "Tema alternativo",
                "PreferencesHomeInfo": "Habbo Home Info",
                "PreferencesHabboSearch": "Habbo Search",
                "PreferencesNewArticles": "Alert per Nuovi articoli",
                "PreferencesTweet": "Mostra i Tweet dei Fansites",

                "HomeInfoDetails": "Informazioni Habbo",
                "HomeInfoNoExist": "Questo Habbo non esiste",
                "HomeInfoAddFriend": "Aggiungi come amico",
                "HomeInfoAddError": "C'è stato un errore. Riprova",
                "HomeInfoDate": "In Habbo Dal:",
                "HomeInfoStatus": "Stato:",
                "HomeInfoLastVisit": "Ultimo accesso:",
                "HomeInfoFriends": "Amici",
                "HomeInfoFriendSearch": "Cerca...",
                "HomeInfoFriendsCommon": "Friends in common",//change
                "HomeInfoFriendsCommonZero": "You don't have any friends in common.",//change
                "HomeInfoFriendsCommonYou": "You can only compare your friends with other habbos.",//change
                "HomeInfoFriendsCommonLogin": "You need to login to compare your friends.",//change
                "HomeInfoRooms": "Stanze",
                "HomeInfoNoRooms": "Non hai nessuna Stanza",
                "HomeInfoGroups": "Gruppi",
                "HomeInfoNoGroups": "Non sei membro di nessun Gruppo",
                "HomeInfoRatings": "Voti",

                "HabboSearchPlaceholder": "Cerca un Habbo!",

                "NewArticles": "Alert per Nuovi articoli",
                "NewArticlesSearching": "Sto cercando nuovi articoli...",
                "NewArticlesTitle": "Nuovo Articolo!",
                "NewArticlesDetected": "Nuovo articolo trovato! Clicca qui",

                "UpdaterNewTitle": "Nuovo update",
                "UpdaterNewText": "Nuovo update trovato:",
                "UpdaterUpdate": "Aggiorna ora",
                "UpdaterNoTitle": "Non ci sono aggiornamenti",
                "UpdaterNoText": "Non sono stati trovati aggiornamenti! Al momento usi l'ultima versione di MyHabboPlus",
                "UpdaterErrorTitle": "Errore di ricerca",
                "UpdaterErrorText": "Non è stata possibile la connessione."
            };
        }else if(myhpLang=="de") {
            // Deutsch by Skyki
            text= {
                "Close": "Schließen",
                "Error": "Fehler",
                "Attention": "Obacht!",
                "NoConnect": "Verbindungsfehler.",
                "Loading": "Verladung...",
                "Hour": "Zeit",
                "Hours": "Stunden ",
                "Day": "Tag",
                "Days": "Tage",
                "Week": "Woche",
                "Weeks": "Woche",
                "Never": "Nie",
                "ChangeColor":"Farbe ändern",

                "LightboxTitle": "Aufmerksamkeit!",
                "Preferences": "Einstellungen",
                "PreferencesGeneral": "Allgemein",
                "PreferencesVersion": "Version",
                "PreferencesUpdate": "Nach Updates suchen ",
                "PreferencesUpdateFreq": "Suche nach Häufigkeit der Updates",
                "PreferencesUpdateChannel": "Kanalaktualisierung ",
                "PreferencesUpdateChannelRelease": "Finale Versionen (empfohlen)",
                "PreferencesUpdateChannelBeta": "Beta",
                "PreferencesUpdateChannelCustom": "Benutzerdefinierte (für Experten)",
                "Language": "Sprache",
                "LanguageAuto": "Automatisch erkennen ",
                "PreferencesModules": "Module",
                "PreferencesTheme": "Alternative Theme",
                "PreferencesHomeInfo": "Informationen Habbo Home",
                "PreferencesHabboSearch": "Suche Habbos",
                "PreferencesNewArticles": "Benachrichtigung für neue Nachrichten",
                "PreferencesTweet": "Tweets anzeigen Fan web",
                "PreferencesAbout":"About MyHabboPlus",//change

                "HomeInfoDetails": "Benutzerdetails",
                "HomeInfoNoExist": "Dieser Habbo nicht.",
                "HomeInfoAddFriend": "Als Freund hinzufügen",
                "HomeInfoAddError": "Es ist ein Fehler Senden der Anfrage Freund gewesen.",
                "HomeInfoDate": "In Habbo ab:",
                "HomeInfoStatus": "Staat:",
                "HomeInfoLastVisit": "Último acceso:",
                "HomeInfoFriends": " Letzter Zugang:",
                "HomeInfoFriendSearch": "Suche...",
                "HomeInfoFriendsCommon": "Friends in common",//change
                "HomeInfoFriendsCommonZero": "You don't have any friends in common.",//change
                "HomeInfoFriendsCommonYou": "You can only compare your friends with other habbos.",//change
                "HomeInfoFriendsCommonLogin": "You need to login to compare your friends.",//change
                "HomeInfoBadges": "Abzeichen",
                "HomeInfoRooms": "Räume",
                "HomeInfoNoRooms": "Du hast keine Räume",
                "HomeInfoGroups": "Gruppen",
                "HomeInfoNoGroups": "Du bist in keiner Gruppe",
                "HomeInfoRatings": "Stimmen",

                "HabboSearchPlaceholder": "Suche Habbo...",

                "NewArticles": "Benachrichtigung für neue Nachrichten ",
                "NewArticlesSearching": "Suchen Sie nach neuen Nachrichten...",
                "NewArticlesTitle": "Neue Nachrichten!",
                "NewArticlesDetected": "Neue Nachrichten gefunden. Klicken Sie hier.",

                "UpdaterNewTitle": "Neues Update",
                "UpdaterNewText": "Neues Update gefunden:",
                "UpdaterUpdate": "Jetzt aktualisieren",
                "UpdaterNoTitle": "Keine neuen Updates",
                "UpdaterNoText": "Nicht bestimmt keine Updates. Sie sind mit der neuesten Version von MyHabboPlus.",
                "UpdaterErrorTitle": "Fehlgeschlagen Updates finden",
                "UpdaterErrorText": "Es ist nicht möglich, auf den Update-Kanal zu verbinden."
            };
        }else if(myhpLang=="tr") {
             // Turkish by moltax-B4N

             text= {
                "Close": "Yakın",
                "Error": "Hata",
                "Attention": "Dikkat!",
                "NoConnect": "Bağlantı Hatası.",
                "Loading": "Yükleme...",
                "Hour": "Zaman",
                "Hours": "Saat",
                "Day": "Gün",
                "Days": "Günler",
                "Week": "Hafta",
                "Weeks": "Hafta",
                "Never": "Asla",
                "ChangeColor":"Rengini değiştirme",

                "LightboxTitle": "Dikkat!",
                "Preferences": "Tercihleri",
                "PreferencesGeneral": "Genel",
                "PreferencesVersion": "Versiyonu",
                "PreferencesUpdate": "Güncellemeleri kontrol",
                "PreferencesUpdateFreq": "Güncellemeleri arama frekansı",
                "PreferencesUpdateChannel": "Kanal yükseltme",
                "PreferencesUpdateChannelRelease": "Son sürümleri (Önerilen)",
                "PreferencesUpdateChannelBeta": "Beta",
                "PreferencesUpdateChannelCustom": "Özel (uzmanlar için)",
                "Language": "Dil",
                "LanguageAuto": "otomatik olarak algılar",
                "PreferencesModules": "Modüller",
                "PreferencesTheme": "Alternatif konu",
                "PreferencesHomeInfo": "Habbo ev hakkında bilgi",
                "PreferencesHabboSearch": "Arama habbos",
                "PreferencesNewArticles": "Yeni haberler uyar",
                "PreferencesTweet": "Sayfalar tweets görüntülenir",
                "PreferencesAbout":"About MyHabboPlus",//change

                "HomeInfoDetails": "Kullanıcı Bilgileri",    
                "HomeInfoNoExist": "Orada Bu Habbo.",             
                "HomeInfoAddFriend": "Arkadaş olarak ekle",
                "HomeInfoAddError": "arkadaş isteği gönderilirken bir hata oluştu.",                                       
                "HomeInfoDate": "Habbo In beri",
                "HomeInfoStatus": "Devlet:",
                "HomeInfoLastVisit": "Son erişim:",
                "HomeInfoFriends": "Arkadaşlar",
                "HomeInfoFriendSearch": "Arama...",
                "HomeInfoFriendsCommon": "Friends in common",//change
                "HomeInfoFriendsCommonZero": "You don't have any friends in common.",//change
                "HomeInfoFriendsCommonYou": "You can only compare your friends with other habbos.",//change
                "HomeInfoFriendsCommonLogin": "You need to login to compare your friends.",//change
                "HomeInfoBadges": "Plakalar",
                "HomeInfoRooms": "Oda",
                "HomeInfoNoRooms": "Siz herhangi bir oda yok",
                "HomeInfoGroups": "Gruplar",
                "HomeInfoNoGroups": "Siz herhangi bir grup üyesi değilsiniz",
                "HomeInfoRatings": "Oy",

                "HabboSearchPlaceholder": "Arama Habbo...",

                "NewArticles": "Daha fazla haber uyarı",
                "NewArticlesSearching": "Yeni haber arıyor...",
                "NewArticlesTitle": "Yeni Hikaye!",
                "NewArticlesDetected": "Bulunan Haber Öğeleri, burada vermek.",

                "UpdaterNewTitle": "Yeni Güncelleme",
                "UpdaterNewText": "keşfedilen yükseltme:",
                "UpdaterUpdate": "Şimdi güncellemek",
                "UpdaterNoTitle": "yeni güncellemeler",
                "UpdaterNoText": "Hiçbir güncellemeyi algılanmadı. Sen MyHabboPlus en son sürümünü çalıştıran.",
                "UpdaterErrorTitle": "Güncelleştirmelerini bulmak için başarısız oldu",
                "UpdaterErrorText": "Bu güncelleştirme kanalına bağlamak mümkün olmamıştır."
            };

        }else if(myhpLang=="fi") {
             // Finnish by -Aveno-

             text= {
                "Close": "Sulje",
                "Error": "Virhe",
                "Attention": "Huomio!",
                "NoConnect": "Virhe yhteydessä.",
                "Loading": "Ladataan...",
                "Hour": "Tunti",
                "Hours": "Tuntia",
                "Day": "Päivä",
                "Days": "Päivää",
                "Week": "Viikko",
                "Weeks": "Viikkoa",
                "Never": "Ei koskaan",
                "ChangeColor":"Vaihda väriä",

                "LightboxTitle": "Huomio!",
                "Preferences": "Asetukset",
                "PreferencesGeneral": "Yleinen",
                "PreferencesVersion": "Versio",
                "PreferencesUpdate": "Hae päivityksiä",
                "PreferencesUpdateFreq": "Päivitysten taajuus",
                "PreferencesUpdateChannel": "Kanavan päivitys",
                "PreferencesUpdateChannelRelease": "Viimeisimmät julkaisut (Suositeltu)",
                "PreferencesUpdateChannelBeta": "Beta",
                "PreferencesUpdateChannelCustom": "Mukautettu (Vain kokeneille)",
                "Language": "Kieli",
                "LanguageAuto": "Automaattinen tunnistus",
                "PreferencesModules": "Moduulit",
                "PreferencesTheme": "Vaihtoehtoinen teema",
                "PreferencesHomeInfo": "Habbo Home Info",
                "PreferencesHabboSearch": "Habbo Haku",
                "PreferencesNewArticles": "Hae uusia artikkeleita",
                "PreferencesTweet": "Näytä fanisivujen twiitit",

                "HomeInfoDetails": "Käyttäjän tiedot",
                "HomeInfoNoExist": "Tätä Habboa ei ole olemassa!",
                "HomeInfoAddFriend": "Lisää kaveriksi",
                "HomeInfoAddError": "Kaveripyynnön lähettämisessä ilmeni ongelma",
                "HomeInfoDate": "Hahmo luotu:",
                "HomeInfoStatus": "Tila:",
                "HomeInfoLastVisit": "Kirjautunut viimeksi:",
                "HomeInfoFriends": "Kaverit",
                "HomeInfoFriendSearch": "Hae...",
                "HomeInfoFriendsCommon": "Friends in common",//change
                "HomeInfoFriendsCommonZero": "You don't have any friends in common.",//change
                "HomeInfoFriendsCommonYou": "You can only compare your friends with other habbos.",//change
                "HomeInfoFriendsCommonLogin": "You need to login to compare your friends.",//change
                "HomeInfoBadges": "Merkit",
                "HomeInfoRooms": "Huoneet",
                "HomeInfoNoRooms": "Sinulla ei ole huoneita",
                "HomeInfoGroups": "Ryhmät",
                "HomeInfoNoGroups": "Et ole minkään ryhmän jäsen",
                "HomeInfoRatings": "Äänet",

                "HabboSearchPlaceholder": "Etsi Habboa...",

                "NewArticles": "Hae uusia artikkeleita",
                "NewArticlesSearching": "Haetaan uusia artikkeleita...",
                "NewArticlesTitle": "Uusi artikkeli!",
                "NewArticlesDetected": "Uusi artikkeli löytynyt. Klikkaa tästä.",

                "UpdaterNewTitle": "Uusi päivitys",
                "UpdaterNewText": "Uusi päivitys löytynyt:",
                "UpdaterUpdate": "Päivitä heti",
                "UpdaterNoTitle": "Ei uusia päivityksiä",
                "UpdaterNoText": "Uusia päivityksiä ei löytynyt. Käytössäsi on viimeisin versio MyHabboPlussasta.",
                "UpdaterErrorTitle": "Päivityksen etsimisessä ilmeni ongelma",
                "UpdaterErrorText": "Päivityskanavaan ei voitu yhdistää."
            };

        }else{
                // English

                text= {
                    "Close": "Close",
                    "Error": "Error",
                    "Attention": "Attention!",
                    "NoConnect": "Connection error.",
                    "Loading": "Loading...",
                    "Hour": "Hour",
                    "Hours": "Hours",
                    "Day": "Day",
                    "Days": "Days",
                    "Week": "Week",
                    "Weeks": "Weeks",
                    "Never": "Never",
                    "ChangeColor":"Change color",

                    "LightboxTitle": "Attention!",
                    "Preferences": "Preferences",
                    "PreferencesGeneral": "General",
                    "PreferencesVersion": "Version",
                    "PreferencesUpdate": "Search for updates",
                    "PreferencesUpdateFreq": "Frequency for updates",
                    "PreferencesUpdateChannel": "Channel update",
                    "PreferencesUpdateChannelRelease": "Final releases (Recommended)",
                    "PreferencesUpdateChannelBeta": "Beta",
                    "PreferencesUpdateChannelCustom": "Custom (For experts)",
                    "Language": "Language",
                    "LanguageAuto": "Auto detection",
                    "PreferencesModules": "Modules",
                    "PreferencesTheme": "Alternative theme",
                    "PreferencesHomeInfo": "Habbo Home Info",
                    "PreferencesHabboSearch": "Habbo Search",
                    "PreferencesNewArticles": "Alert for new articles",
                    "PreferencesTweet": "Show Tweets by fansites",
                    "PreferencesAbout":"About MyHabboPlus",

                    "HomeInfoDetails": "User details",
                    "HomeInfoNoExist": "This Habbo doesn't exist.",
                    "HomeInfoAddFriend": "Add as friend",
                    "HomeInfoAddError": "There was an error sending the friend request.",
                    "HomeInfoDate": "In Habbo since:",
                    "HomeInfoStatus": "Status:",
                    "HomeInfoLastVisit": "Last log in:",
                    "HomeInfoFriends": "Friends",
                    "HomeInfoFriendSearch": "Search...",
                    "HomeInfoFriendsCommon": "Friends in common",
                    "HomeInfoFriendsCommonZero": "You don't have any friends in common.",
                    "HomeInfoFriendsCommonYou": "You can only compare your friends with other habbos.",
                    "HomeInfoFriendsCommonLogin": "You need to login to compare your friends.",
                    "HomeInfoBadges": "Badges",
                    "HomeInfoRooms": "Rooms",
                    "HomeInfoNoRooms": "You do not have any rooms",
                    "HomeInfoGroups": "Groups",
                    "HomeInfoNoGroups": "You are not a member of any Groups",
                    "HomeInfoRatings": "Votes",

                    "HabboSearchPlaceholder": "Search Habbo...",

                    "NewArticles": "Alert for new articles",
                    "NewArticlesSearching": "Searching new articles...",
                    "NewArticlesTitle": "New article!",
                    "NewArticlesDetected": "New article found. Click here.",

                    "UpdaterNewTitle": "New update",
                    "UpdaterNewText": "New update found:",
                    "UpdaterUpdate": "Update now",
                    "UpdaterNoTitle": "There are no new updates",
                    "UpdaterNoText": "No update has been detected. You are running the latest version of MyHabboPlus.",
                    "UpdaterErrorTitle": "Error searching updates",
                    "UpdaterErrorText": "It has not been possible to connect with the update channel."
                };
            }
        }
        loadLang();
