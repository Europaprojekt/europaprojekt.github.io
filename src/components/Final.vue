<script setup lang="ts">

</script>

<template>
    <div class="final">
        <div class="final__container">
            <h1>Entwicklung von Rechtsextremismus</h1>
            <p>
                Die Geschichte von Rechtsextremismus reicht weit zurück.<br>
                Zum Beispiel gab es schon im Mittelalter Judenhass. Christen war es nämlich zu der Zeit verboten, Bankgeschäfte zu machen und so übernahmen es oft Juden und es entstanden Vorurteile, dass Juden <i title='(Dieses Vorurteil wird auch im Drama "Andorra" von Max Frisch aufgegriffen)'>geldfokussiert</i> waren. Außerdem mussten sie beispielsweise als Sündenbock für die Pest hinhalten und wurden verfolgt.<br>
                Wir fangen hier aber mit der Nachkriegszeit vom 2. Weltkrieg an. Zu der Zeit gab es Armut und Unsicherheit.<br>
                Allgemein profitieren rechte Parteien oft von Unsicherheit und Unzufriedenheit, weil die Menschen dann Veränderung wollen. Und das ist genau das, was rechte Parteien anbieten: eine Alternative. Die AfD trägt das Wort schon im Namen.<br>
                So wuchsen die Wahlerfolge von recht(sextrem)en Parteien zeitweise auf bis zu 11 % in manchen Bundesländern.<br>
                Bald jedoch passierte das Wirtschaftswunder von 1950 und brachte mehr Stabilität, die das Bedürfnis nach einer 'Alternative' verringerte.<br>
                In den 60-ern fand eine Wirtschaftskrise statt, die den Aufstieg der NPD (Nationaldemokratische Partei Deutschland) begünstigte. Diese verlor aber deswegen wieder an Relevanz, weil andere Einflüsse dazwischen spielten: Auf eine alleinige CDU(/CSU)-Koalition ab 1966 folgte eine SPD-FDP-Koalition in 1969. Die CDU(/CSU) brauchte mehr Wähler. Letzten Endes gelang es ihr, der NPD vier Fünftel ihrer Wählerschaft abzuschöpfen. Die NPD konnte das mur schwer wegstecken.<br>
                Mehrere Faktoren in Westeuropa wie sozialer Wandel oder aber auch Migration lösten in den 80er Jahren eine weitere Welle an Rechtsextremismus aus. So gewann auch wieder die NPD an Stimmen und nahm 1989 mit über 7 % die Fünf-Prozent-Hürde in der Europawahl.<br>
                Nach dem Mauerfall in 19__ gehörte schließlich auch Ostdeutschland wieder dazu und Menschen, die in der DDR bei Protesten auf Polizeigewalt gestoßen waren, hatten eine höhere Gewaltbereitschaft. So fand etwa dei Hälfte rassistischer Gewalttaten zwischen 1991 und 1994 in Ostdeutschland statt.<br>
                Dennoch hatten die rechten Parteien im Osten wenig Erfolg. Den hatten sie erst 1998 durch die Unzufriedenheit in Folge des Systemwechsels und brachten es auf teilweise über 10 %. Anfang der 2000ern stieg die rechtsextremen Straf- und Gewalttaten.<br>
                Die AfD wurde 2013 als europaskeptische, wirtschaftsliberale und nationalliberale Partei gegründet.<br>
                (Quellen: Q1)
            </p>

            <h1>Rechtsextremismus in der Europawahl</h1>
            <p>
                In den letzten Jahren ist Europa nach rechts gerückt. Zumindest kann man das aus der Europawahl 2014 schließen.<br>
                Rechtspopulistische Parteien haben sich in den verschiedensten Ländern etabliert, eine dauerhafte Erscheinung in dem Regierungssitz und auch ihre Augen auf die Europawahl geworfen.<br>
                Zurzeit gibt es 2 große Fraktionen, die dem rechten Spektrum zuzuordnen sind:<br>
                Die EKR-Fraktion (Europäische Konservative und Reformen) und die ID-Fraktion (Identität und Demokratie).<br>
                Die EKR-Fraktion stellen 66 Abgeordnete aus 20 verschiedenen Parteien aus 16 Mitgliedsstaaten. Das Zentrum der Fraktion besteht aus den 24 Abgeordneten aus der PiS (Recht und Gerechtigkeit), die in Polen im Regierungssitz sind.<br>
                Die ID-Fraktion hat 62 Abgeordnete aus 8 Mitgliedsstaaten und mit 25 Abgeordneten aus der Italienischen Lega führen Sie die Fraktion.<br>
                Die AfD gehört auch zu der ID-Fraktion.<br>
                Damit sind 139 der 705 Europaabgeordneten, dem Lager der Rechtspopulisten und Rechtsextremen zugehörig.<br>
                <br>
                Warum gibt es 2 rechte Fraktionen im Europaparlament?<br>
                <br>
                Es gibt verschiedene Gründe warum 2 rechte Parteien im Europaparlament existieren. Zum Beispiel haben sich die Parteien der ID-Fraktion, mehrere Male dafür ausgesprochen aus der EU auszutreten.<br>
                Auch sind die beiden Fraktionen sich nicht einig über die Positionen, die sie zu Russland vertreten wollen. Sie streiten sich auch über die Migrationspolitik, da die Parteien aus den südlichen EU-Staaten wollen, dass die anderen EU-Mitglieder die Flüchtlinge aus dem Mittelmeer aufnehmen, um Druck von ihnen zu entlasten, da sie viele Probleme mitder schieren Menge der Flüchtlinge aus dem Mittelmeer haben.<br>
                (Quellen: Q2)
            </p>


            <h1>Quellen</h1>
            <div class="final__q">
                <h3>Q1: </h3>
                <p>
                    <a href="https://www.historisches-lexikon-bayerns.de/Lexikon/Judenverfolgungen_(Spätmittelalter)">www.historisches-lexikon-bayerns.de</a><br>
                    <a href="https://www.mdr.de/geschichte/weitere-epochen/mittelalter/juden-im-mittelalter-100.html">www.mdr.de</a><br>
                    <br>
                    https://de.wikipedia.org/wiki/Alternative_für_Deutschland#:~:text=Die%20AfD%20wurde%202013%20als,Jahre%20deutlich%20nach%20rechts%20entwickelte.<br>
                </p>
            </div>
        </div>
    </div>

</template>

<style lang="scss">

.final {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-block-start: 180px;
    margin-block-end: 20dvh;

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        max-width: 80dvw;

        & p {
            //text-align: center;
        }
    }

    &__q {
        gap: 3dvw;
        display: flex;
        flex-direction: row;
        justify-content: start;
        & p {
            display: flex;
            flex-direction: column;
            gap: .2dvh;
        }
    }


}
</style>