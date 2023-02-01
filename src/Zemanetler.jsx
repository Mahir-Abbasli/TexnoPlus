import React from 'react'
import './Zemanetler.css'
import Accordion from 'react-bootstrap/Accordion'
import img1 from './image/shield.png'
import img2 from './image/dualzemanet-1.jpg'
import img3 from './image/qizilzemanet.jpg'
import img4 from './image/vipzemanet-3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";


const Zemanetler = () => {
    return (
        <>
            <div className='zemanetler'>
            <div className="Kecidler">
                                <a href="/"> <span>Əsas səhifə</span></a>
                                <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
                                <label>Zəmanətlər</label>
                            </div>
                <div className='opsi_zemanet'>
                    <div className='Zemanetler_soz13'>Zəmanətlər </div>
                    <img src={img1} className='Zemanetler_person' />
                </div>

                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="1" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>DUAL zəmanət</span></Accordion.Header>
                        <Accordion.Body>
                            <img src={img2} className='image_rm' />
                            <p className='teleb_34'><strong>DUAL Zəmanət Sertifikatına Qızıl və VİP zəmanətlər daxildir.</strong></p>
                            <p className='p145'>DUAL Zəmanətə sahib istifadəçilər Qızıl Zəmanət və VİP Zəmanətin hər ikisinə sahib olur, lakin yalnız birindən eyni anda istifadə edə bilir. DUAL Zəmanət istifadəçisinin Qızıl Zəmanət və ya VİP Zəmanətin hansından, nə vaxt istifadə edə bilməsini isə aşağıdakı şərtlər müəyyən edir.</p>
                            <p className='p145'>
                                <strong>a)</strong>
                                Satış tarixindən etibarən 1(bir) il ərzində məhsulda mexaniki təsir və ya su (maye) düşməsi nəticəsində qüsur yaranıbsa, Qızıl Zəmanət şərtlərinə uyğun xidmət göstərilir. Bu halda məhsulun VİP zəmanəti hüquqi qüvvəsini itirmiş olur; <br />
                                <strong>b)</strong>
                                Satış tarixindən etibarən 1(bir) il ərzində Qızıl Zəmanət şərtlərinə uyğun məhsula xidmət göstərilməsinə ehtiyac olmasa, Qızıl Zəmanət müddəti bitmiş olur və məhsulun VİP zəmanət şərtləri qüvvəyə minir. Bu halda VİP zəmanət satış tarixindən hesablanır və verilmiş müddətdə qüvvədə olur; <br />
                                <strong>c)</strong>
                                Yəni, alıcı DUAL Zəmanət Sertiﬁkatı aldıqda tək bir zəmanətdən istifadə edə biləcək (Qızıl Zəmanət və ya VİP Zəmanət). <br />
                                <strong>ç)</strong>
                                Hazırkı İcra Şərtlərində göstərilənlər yalnız müştəri tərəﬁndən DUAL Zəmanət Sertiﬁkatını, şəxsiyyəti təsdiq edən sənəd təqdim edilməklə həyata keçirilir. <br />
                                <strong>d)</strong>
                                DUAL Zəmanət Sertiﬁkatında qeyd olunmuş seriya nömrəsi ilə müştərinin təqdim etdiyi malın seriya nömrəsi eyni olmalıdır. <br />
                                <strong>e)</strong>
                                Televizorlar (ölçüsü 32 dyumdan yuxarı olan) Müştərinin ünvanından Səlahiyyətli Servis Mərkəzinin əməkdaşları tərəﬁndən götürülür. <br />
                                <strong>ə)</strong>
                                Televizorlar (ölçüsü 32 dyumdan yuxarı olan) Müştərinin ünvanından Səlahiyyətli Servis Mərkəzinin əməkdaşları tərəﬁndən götürülür. <br />
                                <p className='teleb_34'><strong>Qızıl Zəmanət və onun şərtləri: </strong></p>
                                <br />
                                <strong>1.</strong>
                                Qızıl Zəmanət, malın istehsalat (zavod/fabrik) qüsurlarına deyil, mexaniki zədələnmələr (istifadə nəticəsində yetirilən təsadüﬁ zədələnmələr də daxil olmaqla), istismar şərtlərinin pozulması nəticəsində yaranan nasazlıqlar (məs.: içərisinə mayenin düşməsi və s.), proqram təminatından bədniyyətli istifadənin nəticəsi olan nasazlıqlar (virus), açıq alovla təmas nəticəsində yaranan qüsurlar və ya elektrik gərginliyinin stabil olmaması nəticəsində yaranan nasazlıqlar və s. kimi hallara şamil olunur; <br />
                                <strong>2.</strong>
                                QZ şərtlərinə daxil olmayan hissələr korpus və aksesuarlardır (istisna: TV pultu); <br />
                                <strong>3.</strong>
                                Bu Qızıl Zəmanət uyğun olaraq təmir edilmiş və ya dəyişdirilmiş ehtiyat hissəsinə 30 (otuz) təqvim günü zəmanət müddəti verilir (kənar təsirlər nəticəsində yaranmış qüsurlar istisna olmaqla); <br />
                                <strong>4.</strong>
                                Qızıl Zəmanət verilmiş hissə öncə təmir edilə bilər. Həmin hissənin təmiri mümkün olmadıqda isə qüsurlu hissə yalnız bir dəfə yeni hissə ilə əvəz edilə bilər <br />
                                <strong>5.</strong>
                                Təmiri mümkün olan qüsur halında hər bir cihaz üzrə təmir xərci məbləği Baku Service Company hesabına ödənilir; <br />
                                <strong>6.</strong>
                                Təmir müddəti 14 iş günü ərzində həyata keçirilir. Təmir 14 iş gününü keçərsə, əldə etdiyiniz məhsulun 100 % dəyərində yenisini əldə edə bilərsiniz.<br />
                                <strong>7.</strong>
                                Təmir müddətində müştəriyə əvəzedici məhsul verilir.<br />
                                <strong>8.</strong>
                                Təmiri mümkün olmaması və ya təmirə uyğun olmamasını yalnız BSC şirkəti mütəxəssisləri tərəﬁndən təyin edilir. Müştəri razılaşır ki, bu məsələnin həllində müştəri tərəﬁndən üçüncü şəxslərin cəlb edilməsi və onların qərarlarının rəhbər tutulması yolverilməzdir.<br />
                                <strong>9.</strong>
                                Təmiri mümkün olmadığı halda, cihazın istifadə müddəti nəzərə alınmaqla, cihazın alqı satqı gününə olan qiyməti əsas götürülərək, şirkət tərəﬁndən müştəriyə aşağıdakı qaydada ödəniş edilir;<br />
                                <strong>10.</strong>
                                Qızıl Zəmanət Sertifakı Sizə zəmanət müddəti çərçivəsində güzəştli şərtlərlə məhsulu dəyişmək imkanı verir.<br />
                                <strong>11.</strong>
                                Siz nağd əldə edilmiş məhsulu QZ vasitəsi ilə 30 gün ərzində istənilən səbəbdən qaytara bilərsiziniz. Bu halda QZ-in güzəştli şərti tədbiq edilmiş hesab edilir, və QZ sertiﬁkatının qaytarılması icra edilmir.<br />
                                <strong>12.</strong>
                                Məhsul təmirə yararsız olduğu halda kompensasiya cədvəl 1 göstərilən şəkildə təmin olunur:<br />
                                <strong>13.</strong>
                                Məhsul təmir olunduqdan sonra, müştəri konpensasiya tələb etdiyi halda, qeyd olunan kompensasiya məhsulun təmirinə sərf olunan xərclər çıxılmaqla tətbiq edilir;<br />
                                <strong>14.</strong>
                                Müştəri Qızıl Zəmanətdan yararlanaraq, ilk müraciətində malı təmir etdirməyi seçdiyi halda, Qızıl Zəmanət üzrə ikinci və daha sonrakı müraciətlərində məhsulu qaytarma hüququnu itirmiş sayılır;<br />
                                <p className='teleb_34'><strong>VIP Zəmanət və onun şərtləri: </strong></p>
                                İstehsalçı şirkətin təqdim etdiyi zəmanət müddəti qədər VIP zəmanət müddəti artırılır. TV: LED (ekran), plata, qida bloku, şleyﬂər, tikon plata, sensor düymələr, wi ﬁ bloku;Xüsusi şərt: VIP Zəmanət müddətində məhsul (cihaz) yalnız təmir olunur, onun dəyişdirilməsi və qaytarılması mümkün deyil. Məhsulun təmiri mümkün olmadıqda, Baku Electronics mağazalar şəbəkəsində müştəriyə həmin malın satış müqaviləsində göstərilən məbləğə (bu məbləğə yalnız malın qiyməti daxildir, digər xərclər daxil edilmir) uyğun mal verilir. Təmir olunmuş məhsul müştəri tərəﬁndən 90 gün ərzində servisdən təhvil alınmırsa,  o zaman BSC məhsulun Servisdə saxlanılan hər günə görə saxlanılma haqqı hesablayır; Müştəriyə ödəniləcək kompensassiya, ödəniş üsulu hissəli olduğu halda alış öhdəliyinin bağlanmasına sərf olunur.
                            </p>



                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Qızıl zəmanət</span></Accordion.Header>
                        <Accordion.Body>
                            <img src={img3} className='image_rMm' />
                            <p className='p145'>Qızıl Zəmanət (bundan sonra QZ) Baku Electronics mağazalarından alınan: Mobil / TV / Dect telefon / Planşet məhsullarının, Korpus və Aksesuarlarından başqa (istisna: TV pult), istənilən detalına şamil olunur. Qızıl zəmanət çərcivəsində məhsulda nasazlıq yarandıqda “Baku Service Company” (bundan sonra BSC) tərəfindən məhsul pulsuz təmir olunur. Hər detal 1 (bir) dəfə dəyişdirilir və dəyişdirilən detala 30 gün zəmanət verilir. Böyük ölçülü televizorlar (ölçüsü 32+ düymdan yuxarı olanlar) müştərinin ünvanından BSC əməkdaşı tərəfindən götürülür.</p>
                            <p className='p145'>Qızıl Zəmanət  Sertifakı Sizə zəmanət müddəti çərçivəsində güzəştli şərtlərlə məhsulu dəyişmək imkanı verir. </p>
                            <p className='p145'>Siz nağd əldə edilmiş məhsulu QZ vasitəsi ilə 30 gün ərzində istənilən səbəbdən qaytara bilərsiziniz. Bu halda QZ-in güzəştli şərti tədbiq edilmiş hesab edilir, və QZ sertifikatının qaytarılması icra edilmir. Müştəri məhsulu BSC-də təmir etdirərsə, məhsulu qaytarma hüququnu itirmiş sayılır. Məhsul təmirə yararsız olduğu halda kompensasiya aşağıda göstərilən şəkildə təmin olunur:</p>

                            <p className='teleb_34'><strong>Ətraflı şərtlər aşağıda qeyd olunub:</strong></p>
                            <p className='p145'>
                                <strong>1.</strong>
                                Baku Electronics bu şərtləri dəyişmək və ya əlavələr etmək hüququnu özündə saxlayır; <br />
                                <strong>2.</strong>
                                Müştəri məhsul diaqnostikası və cihazların təmirə yararlılığından asılı olaraq öz seçimi ilə (a) qeyri-istehsal xarakterli müm- kün nasazlıqların aradan qaldırılması (təmir edilməsi) hüququnu və/və ya (b) bu İcra Şərtlərində göstərilmiş məbləğdə və qaydada kompensasiya məbləği əldə edir;<br />
                                <strong>3.</strong>
                                QZ məhsulun istehsalat (zavod/fabrik) qüsurlarına deyil, mexaniki zədələnmələr (istifadə nəticəsində yaranan təsadüfi zədələnmələr də daxil olmaqla), istismar şərtlərinin pozulması nəticəsində yaranan nasazlıqlar (məs.: içərisinə mayenin düşməsi və ), proqram təminatından bədniyyətli istifadənin nəticəsi olan nasazlıqlar (virus), açıq alovla təmas nəticəsində və ya elektrik cərəyanından yaranan zədələnmələr və s. kimi hallara şamil olunur;<br />
                                <strong>4.</strong>
                                QZ şərtlərinə daxil olmayan hissələr korpus və aksesuarlardır (istisna: TV pultu);<br />
                                <strong>5.</strong>
                                Ödəniş üsulu hissəli qeyd olunan alışlarda ödəniş öhdəliyi müştəri tərəfindən yerinə yetirilmədikdə öhdəlik bərpa olu- nana qədər QZ ləğv olunur;<br />
                                <strong>6.</strong>
                                Hazırkı İcra Şərtlərində göstərilənlər yalnız müştəri tərəfindən QZ talonu və şəxsiyyəti təsdiq edən sənəd təqdim edilməklə həyata keçirilir;<br />
                                <strong>7.</strong>
                                QZ talonunda qeyd olunmuş eyniləşdirmə nömrəsi (seriya nömrəsi, yaxud İMEİ) ilə Müştərinin təqdim etdiyi məhsulun eyniləşdirmə nömrəsi eyni olmalıdır;<br />
                                <strong>8.</strong>
                                Bu QZ-ya uyğun olaraq təmir edilmiş və ya dəyişdirilmiş ehtiyat hissəsinə 30 (otuz) təqvim günü zəmanət müddəti verilir;<br />
                                <strong>9.</strong>
                                Məhsula BSC şirkətinin səlahiyyətli servis mərkəzlərindən başqa hər hansı bir kənar müdaxilə (digər servis, usta, mühən- dis, Müştəri, istifadəçi, hər hansı digər hüquqi və ya fiziki şəxs və s.) olduqda QZ talonu ləğv olunur (Müştəri QZ-dən istifadə hüququnu itirir).<br />
                                <strong>10.</strong>
                                QZ ödəniş şərtləri (hissəli ödənişləri) tam və vaxtında yerinə yetirilməyən məhsullara tətbiq edilmir;<br />
                                <strong>11.</strong>
                                BSC QZ şərtlərinin icrasını müştərinin razılığı olmadan üçüncü şəxslərə həvalə edə bilər. Belə olan halda BSC üçüncü şəxslərin öhdəliklərinə görə müştəri qarşısında özü məsuliyyət daşıyır;<br />
                                <strong>12.</strong>
                                Müştəri QZ talonunu aldığı andan 14 (on dörd) təqvim günü ərzində QZ xidmətindən istifadə etmədiyi halda, onun dəyərini geri tələb etməklə bu xidmətdən imtina etmək hüququna malikdir;<br />
                                <strong>13.</strong>
                                Müştəri məhsulu təmir üçün təqdim etdikdə məhsulun təmirə yararlı olub-olmaması (diaqnostika nəticəsində) qərarı yalnız BSC və onun Səlahiyyətli Servis Mərkəzi tərəfindən Müştəri razılaşır ki, bu məsələnin həllində müştəri tərəfindən üçüncü şəxslərin cəlb edilməsi və onların qərarlarının rəhbər tutulması yolverilməzdir;<br />
                                <strong>14.</strong>
                                Televizorlar (ölçüsü 32+ düymdən yuxarı olan) Müştərinin ünvanından Səlahiyyətli Servis Mərkəzinin əməkdaşları tərəfindən götürülür;<br />
                                <strong>15.</strong>
                                Müştəri məhsulu diaqnostika və ya təmir üçün təqdim edərkən, həmin cihazdakı məlumatları, faylları başqa daşıyıcıya köçürməyi öz öhdəsinə götürür. Əksi olan halda BSC və onun Səlahiyyətli Servis Mərkəzi cihazdakı həmin məlumatların, faylların itməsinə və ya məhv olmasına görə heç bir məsuliyyət daşımır;<br />
                                <strong>16.</strong>
                                QZ müddətində məhsulun hər bir hissəsi yalnız 1 (bir) dəfə dəyişdirilə bilər;<br />
                                <strong>17.</strong>
                                Təmir olunmuş məhsul müştəri tərəfindən 90 gün ərzində Servisdən təhvil alınmırsa, o zaman BSC məhsulu Servisdə saxladığı hər günə görə saxlanılma haqqı hesablayır;<br />
                                <strong>18.</strong>
                                Məhsul təmirdə olduğu müddətdə Müştəriyə onu tələbi üzrə əvəzedici məhsul verilir;<br />
                                <strong>19.</strong>
                                Nağd şəkildə əldə edilmiş məhsulu müştəri QZ vasitəsi ilə 30 gün ərzində istənilən səbəbdən qaytara bilər. Bu halda QZ-in güzəştli şərti tədbiq edilmiş hesab edilir, və QZ sertifikatının qaytarılması icra edilmir.<br />
                                <strong>20.</strong>
                                Əgər Müştəri məhsulu təmir etdirmək istəmirsə, həmin məhsula aşağıda qeyd olunan məbləğdə kompensasiya tətbiq edilir; <br />
                                <strong>21.</strong>
                                Hazırkı İcra Şərtlərinin 21-ci bəndində qeyd olunan kompensasiya şərtləri məhsul təmirə yararsız olduğu (istər təmirdən sonra, istərsə də ilkin diaqnostika zamanı) hala da şamil edilir. Məhsul təmir olunduğu halda qeyd olunan kompensasiya məhsulun təmirinə sərf olunan xərclər çıxılmaqla tətbiq edilir;<br />
                                <strong>22.</strong>
                                Müştəri QZ-dan yararlanaraq, ilk müraciətində məhsulu təmir etdirməyi seçdiyi halda, QZ üzrə ikinci və daha sonrakı müraciətlərində məhsulu qaytarma hüququnu itirmiş sayılır;<br />
                                <strong>23.</strong>
                                Müştəri məhsulu hissəli alış şərti ilə əldə edibsə, müştəriyə konpensasiya məbləği qaytarılmalı olduğu təqdirdə qeyd olunan məbləğ hissəli alış öhdəliyinin bağlanılmasına sərf olunur.<br />
                            </p>

                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>VIP zəmanət</span></Accordion.Header>
                        <Accordion.Body>
                            
                            <img src={img4} className='image_rMm' />
                            <p className='p145'>
                                VİP Zəmanət tv, monitor, noutbook, saundbar və bir çox müxtəlif növə aid məişət əşyalarına aid edilir.<br />
                                Yalnız VİP Zəmanət sahiblərinə xüsusi ayrılmış peşəkar qrup tərəfindən "Ekspress" xidmət göstərilir. Bu Zəmanətə sahib müştərilərin məhsulları təmir olunana qədər onlar əvəzedici məhsulla təmin edilir.<br />
                                VİP Zəmanətə sahib müştərilər məhsulun istifadə qaydaları və texniki xidmətlə bağlı suallarına cavab verən qaynar xəttdən də yararlana bilir. Əgər xarab olan və ya zərər görən məhsulun təmiri mümkün deyilsə müştəriyə həmin malın qiymətində yeni məhsul verilir. VİP Zəmanət alan müştərilər marka və məhsuldan asılı olaraq 1, 2, 3 il ərzində texniki xidmətdən yararlana və istehsal qüsurları aşkarlanan məhsulu ödənişsiz təmir etdirə bilər.    <br />
                                <br />
                                <strong>Üstünlükləri:</strong>
                                <br /><br />
                                Standart zəmanət müddətindən əlavə uzunmüddətli (marka və məhsuldan asılı olaraq 1, 2, 3 il ərzində) texniki xidmətin göstərilməsi; <br /> <br />
                                Məhsulda istehsal qüsurları aşkarlanarsa, həmin qüsurların ödənişsiz aradan qaldırılması; <br />
                                Xüsusi ayrılmış peşəkar qrup tərəfindən "Ekspress" xidmət göstərilməsi;<br />
                                Məhsulun təmir müddəti ərzində, alıcının təmir bitənə qədər əvəzedici məhsulla təmin olunması;<br />
                                Məhsulun istifadə qaydaları və texniki xidmətlə bağlı suallara cavab verən çağrı mərkəzi; <br />
                                Məhsulun təmiri mümkün olmadıqda, Baku Electronics mağazalar şəbəkəsində müştəriyə həmin malın satış müqaviləsində göstərilən məbləğə (bu məbləğə yalnız malın qiyməti daxildir, digər xərclər daxil edilmir) uyğun mal verilir. <br />
                                Şərtləri: VİP zəmanət müddətində, İstehsalçı şirkət tərəfindən təyin olunmuş zəmanət şərtləri əsasında xidmət göstərilir.<br /> <br />
                                <strong>VİP məhsul təyinatı:</strong><br /><br />
                                Soyuducu: Kompressor, fan motor, plata, sensor, displey plata, klapanlar, taymer, bimetal və s.<br />
                                Paltaryuyan: Plata, motor, baraban, bak hissələri, pompa, qızdırıcı, pressuri, şkif və s.<br />
                                Qabyuyan: plata, motor, bak, pompa, qızdırıçı, sensor, su sayğacı və s.<br />
                                Bişirmə avadanlıqları: plata, alışqan bloku, vintillər, kontaktor və s.<br />
                                Kondisioner: kompressor, plata, 4yol hissə, kapilyar, radiator, sensor, step motor və s.<br />
                                TV: LED, (ekran), plata, qida bloku, şleyflər, tikon plata, sensor düymələr, wifi bloku və s.<br />
                                Quruducu: Plata, motor, pompa, qapi zamoku, qızdırıcı, sensorlar, baraban, sayğac, kompressor;<br />
                                Kombi: Plata, pompa, klapan, sensorlar, qaz vintili, yanma kamerası, esenjor, fan motor; <br />
                                Musiqi Mərkəzi: Plata, idarə etmə paneli, Disk oxuducular<br />
                                Generator ütü: pompa, qızdırıcı, su bakı, klapan, plata<br /><br />
                                <strong>Müddəti:</strong><br /><br />
                                Samsung markalı Soyuducu, Paltaryuyan, Qabyuyan, Soba, Bişirmə paneli, Mikrodalğalı soba və Aspiratorlara əlavə 2 il Zəmanət müddəti artırılır, Samsung markalı kondisionerlərə istehsalçı şirkətin təqdim etdiyi zəmanət müddəti qədər zəmanət müddəti artırılır. LG Soyuducu, Paltaryuyan, Qabyuyan əlavə 2 il Zəmanət müddəti artırılır. LG markalı kondisionerlərə istehsalçı şirkətin təqdim etdiyi zəmanət müddəti qədər zəmanət müddəti artırılır.<br />
                                Bosch, Siemens markalı Soyuducu, Paltaryuyan, Qabyuyan, Quruducu, Soba, Bişirmə paneli, Kondisioner, Mikrodalğalı soba və Aspiratorlara əlavə 3 il zəmanət müddəti artırılır. Digər Brendlərə aid olan Kondisioner, TV, Kombi, Tozsoran, Ev Kinotetrı, Soundbar, Musiqi Mərkəzi, Qəhvə Dəmləyən, Generator ütü istehsalçı şirkətin təqdim etdiyi zəmanət müddəti qədər zəmanət müddəti artırılır.<br /><br />
                                <strong>Aşağıdakılar VİP Zəmanət sertifikatı təminatına aid deyil:</strong><br /><br />
                                Zəmanət öhdəlikləri və pulsuz texniki xidmət, məhsulun komplektinə daxil olan aksesuarlara şamil edilmir:<br />
                                Şəxsi (məişət, ailə) ehtiyaclar üçün nəzərdə tutulmuş məhsullar sahibkarlıq fəaliyyəti həyata keçirmə məqsədi və həmcinin onun birbaşa təyinatına uyğun olmayan digər məqsədlərlə istifadə edilərsə;<br />
                                Məhsulda Baku Service Copmany-də kənar servis və ya mütəxəssis tərəfindən təmir cəhdi izləri aşkarlanarsa, eyni zamanda məhsulun konstruksiyasında və ya sxemində İstehsalcı tərəfindən nəzərdə tutulmayan səbəbdən zədə (Aksessuar istisna olmaqla) yaranarsa;<br />
                                Naməlum səbəblərdən, bədbəxt hadisələrin, istehlakçının və ya uçüncü şəxslərin düşünülmüş və ya ehtiyyatsız hərəkətlərinin təsiri nəticəsində məhsulda qüsur yaranarsa;<br />
                                Rütubət, yuksək və ya aşağı temperatur, korroziya, oksidləşmə,məhsulun icərisinə kənar əşyaların (maddələrin), həşərat/canlıların düşməsi nəticəsində əmələ gəlmiş mexaniki zədələnmələr (Aksessuar istisna olmaqla) aşkar olunarsa.<br />
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </div>
        </>
    )
}

export default Zemanetler
