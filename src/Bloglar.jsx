import React from 'react'
import './Bloglar.css'
import img1 from './image/samsung-sayt-bloglar-1-0.jpg'
import img2 from './image/samsung-sayt-bloglar-2-0.jpg'
import img3 from './image/samsung-sayt-bloglar-3-0.jpg'
import img4 from './image/samsung-sayt-bloglar-4-0.jpg'
import img5 from './image/samsung-sayt-bloglar-5-0.jpg'
import img6 from './image/samsung-sayt-bloglar-6-0.jpg'
import img7 from './image/samsung-sayt-bloglar-7-0.jpg'
import img8 from './image/samsung-sayt-bloglar-8-0.jpg'
import img9 from './image/samsung-sayt-bloglar-9-0.jpg'
import img10 from './image/samsung-sayt-bloglar-10-0.jpg'
import img11 from './image/samsung-sayt-bloglar-11-0.jpg'
import img12 from './image/samsung-sayt-bloglar-12-0.jpg'
import img13 from './image/samsung-sayt-bloglar-13-0.jpg'
import img14 from './image/samsung-sayt-bloglar-14-0.jpg'
import img15 from './image/samsung-sayt-bloglar-15-0.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Bloglar = () => {
    return (
        <>
            <div>
                <div className="Kecidler">
                    <a href="/"> <span>Əsas səhifə</span></a>
                    <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
                    <label>Bloqlar</label>
                </div>
                <h1 className='bloglar_h1'>Bloqlar</h1>
                <div class='tum_blog'>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img1} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Samsung Frame TV - dizaynı ilə harmoniya ilə yaradır </span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Zərif korpusu və divara möhkəm bərkidilməsi sayəsində televizor istənilən istiqamətdən möhtəşəm görüntüyə malikdir. Müasir rənglərdə minimalistik interyerə atılan son ştrixlər.. The Frame TV - daha çox rəng, daha çox tərz, daha çox sən.
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img2} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>"iPhone 14" və "iPhone 14 Pro" artıq "TexnoPlus"da!</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Apple nəhayət ki, iPhone 14 smartfon seriyasını təqdim etdi. Təqdim edilmiş yeni seriyaya 4 smartfon modeli daxil olub:  iPhone 14, iPhone 14 Plus, iPhone 14 Pro və iPhone 14 Pro Max.
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img3} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Nə üçün Samsung Galaxy S22 Ultra? Yeni flaqmanı ələ indi əldə etmək üçün 6 səbəb. </span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Bu yaxında texnologiyalar üzrə dünya nəhəngi olan Samsung tərəfindən təqdim olunan yeniliklər hər kəsin diqqətini özünə cəlb etdi. Əsasən də S və Note seriyasının bütün mühüm özəlliklərini özündə cəmləyən və SPen qələmini dəstəkləyən Samsung S22 Ultra diqqətləri öz üzərinə çəkməyi bacardı.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img4} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Oyun oynamaq üçün top 5 telefon</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Mobil oyunlar sahəsində yeniliklərin və
                                    inkişafın olması insanların daha güclü və
                                    daha rahat şəkildə oyun oynaya biləcəyi
                                    smartfonlara yönəlməsinə gətirib çıxarır.
                                    Bəs oyun üçün smartfon telefon modeli
                                    seçərkən ilk olaraq hansı texniki parametrlərə
                                    diqqət etməliyik ona baxaq.
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img5} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Xiaomi Redmi Note 10 Pro və Xiaomi Mi 11T </span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Bu yazımızda 2 flaqman smartfonu - 2021-ci il martın 4-də tanıdılmış 6.67 inç ekran ölçüsünə sahib Xiaomi Redmi Note 10 Pro və 2021-ci il sentyabrın 15-də tanıdılmış 6.67 inç ekran ölçüsünə sahib Xiaomi Mi 11T modellərindən bəhs edəcəyik.
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img6} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Gözləntidən daha üstün Honor 9X Lite</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Əgər mobil telefonunuzu yeniləmək haqqında düşünürsünüzsə, bu yazı sizin üçündür. Bu yazımızda Honor 9X Lite modeli haqqında ətraflıca bəhs edəcəyik
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img7} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>KitchenAid stasionar mikser (5KSM3311XECA)</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Mətbəxtdə fövqəltəbii təamlar hazırlamağı sevənlər yaxın əyləşin. Bu günki yazımızda ulduzumuz KitchenAid brendinin stasionar mikseridir.
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img8} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Sərhədləri aşmış Xiaomi Mİ 10</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Yeni Xiaomi modeli axtarırsınızsa, bura sizin üçündür. Söhbət kosmosa gedib çıxmış Xiaomi Mİ 10 modelindən gedir.
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img9} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Samsung Galaxy A31 QIZIL ORTA</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Samsungun Galaxy A seriyasının parlayan ulduzlarından Samsung Galaxy A31 smartfonundan bəhs edirik.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img10} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Samsung tozsoranı varsa yar gələndə toz olmaz</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>MEvində təmizliyi sevən hər bir xanım üçün işlərini asanlaşdıracaq tozsorana hər daim ehtiyac var. Buna görə də bu dəfə sizlərə keyfiyyətli və sərfəli Samsung tozsorandan söz açacağıq
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img11} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>İki dəfə qapını döyməklə daxili aləmini göstərən LG soyuducusu </span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Hər evdə olması gərəkən məişət əşyalarından olan soyuducudan bəhs edək. Bu dəfə LG soyuducusu qonağımızdır
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img12} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Samsung smartfon ailəsinin yeni üzvü: Galaxy S21 Ultra</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Samsung Galaxy ailəsinin yeni üzvü olan Samsung Galaxy S21 Ultra smartfon modeli və xüsusiyyətləri ilə yaxından tanış olaq.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='full_div1'>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img13} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>İstəyirsən bal çörək? Belə gərək yoxdur, al əlinə Tefalı.</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Tefal çörəkbişirənlə mətbəxdəki işlərinizi daha da rahat edin. Evdə olduğumuz bu qış günlərində səhər yuxudan oyanan kimi evi bürüyən təzə çörək ətrini duymağı kim istəməz ki?
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img14} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Bosch Multibişirici - Mətbəxdəki köməkçiniz</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Bosch multibişirici ilə mətbəx işləri sizin üçün daha da asanlaşacaq. İşdən yorğun halda evə gəlib mətbəxə daxil olursunuz və isti yemək qoxusu ətrafı bürüyüb. Yeməyi hazırlayan isə Boshun Autocook multibişicirisi olur.
                                </span>
                            </div>
                        </div>
                        <div className='blog'>
                            <div className='sekil_div2'>
                                <img src={img15} />
                            </div>
                            <div className='tarix_soz_2'>
                                <span className='cumle2'>Evinizdəki ən vacib köməkçilərinizdən biri - paltaryuyanlar</span>
                            </div>
                            <div className='cumleler_div'>
                                <span>Bu yazımız məişət əşyaları arasında xüsusi önəmə sahib olan paltaryuyanlar, daha dəqiq desək, Hotpoint Paltaryuyan haqqındadır
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bloglar