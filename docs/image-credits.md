# Bildnachweise

Stand 27.10.2026. Alle Bilder liegen in `public/images` und werden über `next/image` als WebP in passenden Grössen ausgeliefert.

## Quelle: Pexels (Pexels License)
Frei für kommerzielle Nutzung, keine Namensnennung nötig. Bilder dürfen nicht unverändert weiterverkauft werden, und abgebildete Personen dürfen nicht in einem negativen Licht dargestellt werden. Lizenz: https://www.pexels.com/license/

Den Kern bildet eine zusammenhängende, warme Editorial-Serie aus einem Shooting (IDs 37229xxx). So wirken die Bilder wie aus einem Guss.

| Datei | Pexels-ID | Motiv | Einsatz |
|---|---|---|---|
| `gesichtsmassage-detail.jpg` | 37229291 | Gesichtsmassage mit warmen Händen | Final CTA, `/ueber-teresa`, Finder „Ich bin unsicher“ |
| `peeling-pinsel.jpg` | 37229298 | Pflegemaske wird mit Pinsel aufgetragen | Fruchtsäurepeeling, `/behandlungen` |
| `gesichtsmaske.jpg` | 37229301 | Kundin mit Pflegemaske | Studio-Raster, `/ergebnisse` |

Quelle jeweils `https://www.pexels.com/photo/<id>/`.

## KI-generiert mit ChatGPT (Kampagnen-Stil, 27.10.2026)
ChatGPT hat zuerst als Art Director lizenzfreie Fotos recherchiert. Für Hydrafacial, Microneedling, Cold Plasma, Raum und Produkte waren die Treffer zu klinisch oder zeigten fremde Marken. Diese Motive wurden deshalb im Stil einer Luxus-Hautpflege-Kampagne generiert: helles Tageslicht, Ivory/Champagne, nude-farbene Handschuhe, keine Logos. Jede Behandlung hat eine eigene Perspektive, damit das Raster nicht repetitiv wirkt.

| Datei | Motiv | Einsatz |
|---|---|---|
| `hero-kampagne.jpg` | Gesichtsmassage im Morgenlicht, Gesicht rechts, ruhige Fläche links | Startseiten-Hero (Fullscreen), von 1672 px auf 2560 px hochskaliert |
| `lux-hydra4face.jpg` | Hydro-Handstück an der Wange | Hydra4Face |
| `lux-microneedling.jpg` | Microneedling-Pen, Profil-Nahaufnahme | Microneedling |
| `lux-coldplasma.jpg` | Plasma-Pen mit feinem violetten Leuchten, Aufsicht | ColdPLASMA |
| `lux-behandlungsraum.jpg` | Altbau-Behandlungsraum mit Stuck und Leinenvorhängen (Stimmungsbild, nicht das echte Studio) | Studio, `/kontakt` |
| `lux-produkte.jpg` | Unbeschriftete Produkte auf Travertin | Studio, `/preise` |

Auflösung der KI-Bilder: 1122×1402 bzw. 1536×1024 px (Maximum von ChatGPT). Für Karten und Seitenköpfe reicht das. Der Hero (1672×941 px) ist auf 2560 px hochskaliert; er wirkt dank weichem Licht scharf genug, ein echtes Studio-Shooting in Originalauflösung wäre für Fullscreen aber die beste Lösung.

## Eigene Bilder von beautyfacelift.ch
| Datei | Quelle | Einsatz |
|---|---|---|
| `teresa-stimac.jpg` | beautyfacelift.ch/ueber-mich (450×600 px) | Portrait in „Über Teresa“ |

Das Foto stammt von der bestehenden Website der Kundin. Vor Livegang klären: Nutzungsrecht des Fotografen und ein neues Portrait in hoher Auflösung (das aktuelle ist für grosse Flächen zu klein, der Hintergrund mit Produktregal ist unruhig).

## Qualität
- Alle Fotos als Original von Pexels geladen und auf max. 2600 px (Hero 2880 px) mit JPEG-Qualität 90 skaliert.
- Auslieferung über `next/image` mit Qualität 85 (`next.config.ts`: `qualities`), WebP, max. 2560 px (`deviceSizes`). So bleibt der erste Aufruf schnell (Hero 2560 px in ca. 0,3 s, 174 KB).

## Auswahlkriterien
- Warme Tonalität passend zu Ivory/Champagne.
- Echte Behandlungssituationen, keine Stock-Lächeln in die Kamera.
- Keine fremden Logos oder Markennamen. Das Foto mit eingesticktem Logo auf dem Kissen wurde deshalb aussortiert.
- Die erste KI-Serie im körnigen Film-Look wurde verworfen. Die aktuellen KI-Bilder folgen einem hellen Kampagnen-Look und sind nur dort im Einsatz, wo es kein passendes lizenzfreies Foto gibt.

## Bewusst KEINE Stockbilder
- **Portrait von Teresa Stimac** (Über Teresa, Hero-Karte): Ein fremdes Gesicht als Inhaberin wäre irreführend. Echtes Portrait-Shooting nötig.
- **Vorher/Nachher-Fälle**: Fremde oder erfundene Ergebnisse sind bei Kosmetikwerbung irreführend und rechtlich heikel. Nur echte Fälle mit schriftlicher Einwilligung.

## Vor Livegang
Stockbilder sind eine gute Übergangslösung. Für die finale Website empfiehlt sich ein Shooting im echten Studio, mit Teresa und den echten Geräten (Hydra4Face, ColdPLASMA).
- Beim Ersetzen einen **neuen Dateinamen** verwenden und die Referenz anpassen, sonst liefern Browser- und Bild-Caches die alte Version aus.
