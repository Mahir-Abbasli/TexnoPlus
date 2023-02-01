import React from 'react'
import './Vakansiyalar.css'
import Accordion from 'react-bootstrap/Accordion'
import img1 from './image/resume.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Vakansiyalar = () => {
    return (
        <div>
            <div className="Kecidler">
                <a href="/"> <span>Əsas səhifə</span></a>
                <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
                <label>Vakansiyalar</label>
            </div>
            <div className='vakansiya'>

                <div className='opsi_vakan'>
                    <div className='Vakansiyalar_soz13'>Vakansiyalar </div>
                    <img src={img1} className='vakansiya_person' />
                </div>

                <Accordion defaultActiveKey="0">

                    <Accordion.Item eventKey="1" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Satış məsləhətçisi</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>Xüsusi tələblər:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Orta və ya ali təhsil;</li>
                                <li className='li_classt'>Müxtəlif məhsul kateqoriyalarının (elektronika, məişət texnikası, ev üçün əşyalar və s.) satışı üzrə minimum 6 aylıq iş təcrübəsi;</li>
                                <li className='li_classt'>Azərbaycan dilini əla səviyyədə bilmək (rus və ingilis dillərini bilməsi arzu olunandır);</li>
                                <li className='li_classt'>Şifahi və yazılı olaraq yüksək ünsiyyətqurma bacarığı;</li>
                                <li className='li_classt'>Aktiv satış bacarığı;</li>
                                <li className='li_classt'>Yüksək inandırıcılıq qabiliyyətinə sahib olmaq;</li>
                                <li className='li_classt'>Problemləri effektiv şəkildə həll etmək;</li>
                                <li className='li_classt'>Gərgin iş qrafikində işləmək və stresə davamlılıq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Vəzifə təlimatı:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müştərilərin ehtiyaclarını müəyyənləşdirmək;</li>
                                <li className='li_classt'>Müştərilərdən məlumatları toplamaq, təhlil etmək və təkliflər vermək;</li>
                                <li className='li_classt'>Müştərilərə yüksək səviyyədə xidmət göstərmək;</li>
                                <li className='li_classt'>Məhsulu müştəriyə təqdim etmək;</li>
                                <li className='li_classt'>Mağazada olan məhsullar, xidmətlər və kampaniyalar haqqında müştəriyə ətraflı məlumat vermək;</li>
                                <li className='li_classt'>Müştərilərin tələb və suallarını diqqətlə dinləmək;</li>
                                <li className='li_classt'>Məhsullar haqqında məsləhətlər vermək və alış üçün seçimləri təklif etmək;</li>
                                <li className='li_classt'>Müştəri məmnuniyyətini yüksək səviyyədə qorumaq və təmin etmək;</li>
                                <li className='li_classt'>Satışın artırılması məqsədilə müştəriləri daim inandırmaq və məlumatlandırmaq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Müraciət forması:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>CV-ni <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a> adresinə göndərin.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Xəzinədar</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>Xüsusi tələblər:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Ali təhsil;</li>
                                <li className='li_classt'>Xəzinədar vəzifəsində minimum 1 illik iş təcrübəsi;</li>
                                <li className='li_classt'>Azərbaycan dilini əla səviyyədə bilmək (rus və ingilis dillərindən birini bilməsi arzu olunandır);</li>
                                <li className='li_classt'>Nağd pul ödənişləri aparmaq üçün riyazi biliklərə malik olmaq;</li>
                                <li className='li_classt'>Analitik düşünmək;</li>
                                <li className='li_classt'>Müxtəlif növ kassa aparatları və onların iş mexanizmləri haqqında məlumatlı olmaq;</li>
                                <li className='li_classt'>Yüksək dəqiqlik və məsuliyyət;</li>
                                <li className='li_classt'>Gərgin iş qrafikində işləmək bacarığı.</li>
                            </ul>
                            <p className='teleb_34'><strong>Vəzifə təlimatı:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müştərilər tərəfindən ödənilən pul vəsaitlərini və ödənişləri qəbul etmək;</li>
                                <li className='li_classt'>Ödənilən vəsaitləri yoxlamaq və tələb olunan qaydada əməliyyatı həyata keçirmək;</li>
                                <li className='li_classt'>Gündəlik satış məbləğini və ödənişləri əks etdirən sənədləri tərtib etmək;</li>
                                <li className='li_classt'>Nağd pul vəsaitlərinin təhlükəsiz şəraitdə saxlanmasını və işəgötürənin səlahiyyətli nümayəndəsinə təhvil verilməsini təmin etmək;</li>
                                <li className='li_classt'>Müştərilərin suallarını dinləmək, səlahiyyəti çərçivəsində cavablandırmaq və ya aidiyyatı üzrə yönləndirmək.</li>
                            </ul>
                            <p className='teleb_34'><strong>Müraciət forması:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>CV-ni <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a> adresinə göndərin.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Əməliyyatçı</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>Xüsusi tələblər:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müvafiq sahə üzrə iş təcrübəsi üstünlükdür;</li>
                                <li className='li_classt'>Azərbaycan dilini əla səviyyədə bilmək;</li>
                                <li className='li_classt'>Operativlik və gərgin iş rejimində işləmək bacarığı;</li>
                                <li className='li_classt'>MS Office proqramlarından (xüsusilə MS Excel) sərbəst istifadə bacarığı;</li>
                                <li className='li_classt'>Analitik düşüncə və təhlil bacarığı;</li>
                                <li className='li_classt'>Şifahi və yazılı formada yüksək ünsiyyət bacarığı;</li>
                                <li className='li_classt'>Problemləri effektiv şəkildə həll etmək;</li>
                                <li className='li_classt'>Məsuliyyətlilik, işdə dəqiqlik və detallara fikir vermək qabiliyyəti.</li>
                            </ul>
                            <p className='teleb_34'><strong>Vəzifə təlimatı:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Ümumi satış hədəflərinin yerinə yetirilməsi üçün mağazada əməliyyatlarla bağlı işləri icra etmək, koordinasiya etmək və işlərə nəzarət etmək;</li>
                                <li className='li_classt'>Mağaza üzrə anbar və xəzinə ilə əlaqəli olan bütün növ əməliyyatların cari vəziyyətini izləmək və problemləri həll etmək;</li>
                                <li className='li_classt'>Mağaza üzrə anbar və xəzinə ilə bağlı gündəlik əməliyyatlar haqqında hesabatlar hazırlamaq;</li>
                                <li className='li_classt'>Əməliyyatların icra statusu ilə bağlı məlumat bazasının daim yenilənməsini təmin etmək;</li>
                                <li className='li_classt'>Sənədləşmə işinin aparılması, müvafiq qaydada sənədlərin tərtib edilməsi və məsul şəxslərə göndərilməsini təmin etmək;</li>
                                <li className='li_classt'>Mağazalarda əməliyyatlarla bağlı xidmət səviyyəsinin artırılması istiqamətində işlər görmək;</li>
                                <li className='li_classt'>Satış analizlərini aparmaqla məhsul kateqoriyaları üzrə müvafiq şəxslərə məlumat vermək;</li>
                                <li className='li_classt'>Mağazada satılan və satılmayan məhsulları araşdırmaq, mağaza tələblərini araşdırıb müəyyən etmək və işin təkmilləşdirilməsi istiqamətində təkliflər vermək.</li>
                            </ul>
                            <p className='teleb_34'><strong>Müraciət forması:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>CV-ni <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a> adresinə göndərin.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Mağaza əməliyyat meneceri</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>Xüsusi tələblər:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müvafiq sahə üzrə iş təcrübəsi üstünlükdür;</li>
                                <li className='li_classt'>Azərbaycan dilini əla səviyyədə bilmək;</li>
                                <li className='li_classt'>Operativlik və gərgin iş rejimində işləmək bacarığı;</li>
                                <li className='li_classt'>MS Office proqramlarından (xüsusilə MS Excel) sərbəst istifadə bacarığı;</li>
                                <li className='li_classt'>Analitik düşüncə və təhlil bacarığı;</li>
                                <li className='li_classt'>Analitik düşüncə və təhlil bacarığı;</li>
                                <li className='li_classt'>Problemləri effektiv şəkildə həll etmək;</li>
                                <li className='li_classt'>Məsuliyyətlilik, işdə dəqiqlik və detallara fikir vermək qabiliyyəti.</li>
                            </ul>
                            <p className='teleb_34'><strong>Vəzifə təlimatı:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müştərilərin ehtiyaclarını müəyyənləşdirmək;</li>
                                <li className='li_classt'>Müştərilərdən məlumatları toplamaq, təhlil etmək və təkliflər vermək;</li>
                                <li className='li_classt'>Müştərilərə yüksək səviyyədə xidmət göstərmək;</li>
                                <li className='li_classt'>Məhsulu müştəriyə təqdim etmək;</li>
                                <li className='li_classt'>Mağazada olan məhsullar, xidmətlər və kampaniyalar haqqında müştəriyə ətraflı məlumat vermək;</li>
                                <li className='li_classt'>Müştərilərin tələb və suallarını diqqətlə dinləmək;</li>
                                <li className='li_classt'>Məhsullar haqqında məsləhətlər vermək və alış üçün seçimləri təklif etmək;</li>
                                <li className='li_classt'>Müştəri məmnuniyyətini yüksək səviyyədə qorumaq və təmin etmək;</li>
                                <li className='li_classt'>Satışın artırılması məqsədilə müştəriləri daim inandırmaq və məlumatlandırmaq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Müraciət forması:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>CV-ni <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a> adresinə göndərin.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Satış məsləhətçisi</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>Xüsusi tələblər:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Orta və ya ali təhsil;</li>
                                <li className='li_classt'>Müxtəlif məhsul kateqoriyalarının (elektronika, məişət texnikası, ev üçün əşyalar və s.) satışı üzrə minimum 6 aylıq iş təcrübəsi;</li>
                                <li className='li_classt'>Azərbaycan dilini əla səviyyədə bilmək (rus və ingilis dillərini bilməsi arzu olunandır);</li>
                                <li className='li_classt'>Şifahi və yazılı olaraq yüksək ünsiyyətqurma bacarığı;</li>
                                <li className='li_classt'>Aktiv satış bacarığı;</li>
                                <li className='li_classt'>Yüksək inandırıcılıq qabiliyyətinə sahib olmaq;</li>
                                <li className='li_classt'>Problemləri effektiv şəkildə həll etmək;</li>
                                <li className='li_classt'>Gərgin iş qrafikində işləmək və stresə davamlılıq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Vəzifə təlimatı:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müştərilərin ehtiyaclarını müəyyənləşdirmək;</li>
                                <li className='li_classt'>Müştərilərdən məlumatları toplamaq, təhlil etmək və təkliflər vermək;</li>
                                <li className='li_classt'>Müştərilərə yüksək səviyyədə xidmət göstərmək;</li>
                                <li className='li_classt'>Məhsulu müştəriyə təqdim etmək;</li>
                                <li className='li_classt'>Mağazada olan məhsullar, xidmətlər və kampaniyalar haqqında müştəriyə ətraflı məlumat vermək;</li>
                                <li className='li_classt'>Müştərilərin tələb və suallarını diqqətlə dinləmək;</li>
                                <li className='li_classt'>Məhsullar haqqında məsləhətlər vermək və alış üçün seçimləri təklif etmək;</li>
                                <li className='li_classt'>Müştəri məmnuniyyətini yüksək səviyyədə qorumaq və təmin etmək;</li>
                                <li className='li_classt'>Satışın artırılması məqsədilə müştəriləri daim inandırmaq və məlumatlandırmaq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Müraciət forması:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>CV-ni <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a> adresinə göndərin.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Satış məsləhətçisi</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>Xüsusi tələblər:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Orta və ya ali təhsil;</li>
                                <li className='li_classt'>Müxtəlif məhsul kateqoriyalarının (elektronika, məişət texnikası, ev üçün əşyalar və s.) satışı üzrə minimum 6 aylıq iş təcrübəsi;</li>
                                <li className='li_classt'>Azərbaycan dilini əla səviyyədə bilmək (rus və ingilis dillərini bilməsi arzu olunandır);</li>
                                <li className='li_classt'>Şifahi və yazılı olaraq yüksək ünsiyyətqurma bacarığı;</li>
                                <li className='li_classt'>Aktiv satış bacarığı;</li>
                                <li className='li_classt'>Yüksək inandırıcılıq qabiliyyətinə sahib olmaq;</li>
                                <li className='li_classt'>Problemləri effektiv şəkildə həll etmək;</li>
                                <li className='li_classt'>Gərgin iş qrafikində işləmək və stresə davamlılıq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Vəzifə təlimatı:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müştərilərin ehtiyaclarını müəyyənləşdirmək;</li>
                                <li className='li_classt'>Müştərilərdən məlumatları toplamaq, təhlil etmək və təkliflər vermək;</li>
                                <li className='li_classt'>Müştərilərə yüksək səviyyədə xidmət göstərmək;</li>
                                <li className='li_classt'>Məhsulu müştəriyə təqdim etmək;</li>
                                <li className='li_classt'>Mağazada olan məhsullar, xidmətlər və kampaniyalar haqqında müştəriyə ətraflı məlumat vermək;</li>
                                <li className='li_classt'>Müştərilərin tələb və suallarını diqqətlə dinləmək;</li>
                                <li className='li_classt'>Məhsullar haqqında məsləhətlər vermək və alış üçün seçimləri təklif etmək;</li>
                                <li className='li_classt'>Müştəri məmnuniyyətini yüksək səviyyədə qorumaq və təmin etmək;</li>
                                <li className='li_classt'>Satışın artırılması məqsədilə müştəriləri daim inandırmaq və məlumatlandırmaq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Müraciət forması:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>CV-ni <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a> adresinə göndərin.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7" className='accordion_header_1H'>
                        <Accordion.Header className='accordion_header_1'><span className='is_adi'>Satış məsləhətçisi</span></Accordion.Header>
                        <Accordion.Body>
                            <p className='teleb_34'><strong>Xüsusi tələblər:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Orta və ya ali təhsil;</li>
                                <li className='li_classt'>Müxtəlif məhsul kateqoriyalarının (elektronika, məişət texnikası, ev üçün əşyalar və s.) satışı üzrə minimum 6 aylıq iş təcrübəsi;</li>
                                <li className='li_classt'>Azərbaycan dilini əla səviyyədə bilmək (rus və ingilis dillərini bilməsi arzu olunandır);</li>
                                <li className='li_classt'>Şifahi və yazılı olaraq yüksək ünsiyyətqurma bacarığı;</li>
                                <li className='li_classt'>Aktiv satış bacarığı;</li>
                                <li className='li_classt'>Yüksək inandırıcılıq qabiliyyətinə sahib olmaq;</li>
                                <li className='li_classt'>Problemləri effektiv şəkildə həll etmək;</li>
                                <li className='li_classt'>Gərgin iş qrafikində işləmək və stresə davamlılıq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Vəzifə təlimatı:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>Müştərilərin ehtiyaclarını müəyyənləşdirmək;</li>
                                <li className='li_classt'>Müştərilərdən məlumatları toplamaq, təhlil etmək və təkliflər vermək;</li>
                                <li className='li_classt'>Müştərilərə yüksək səviyyədə xidmət göstərmək;</li>
                                <li className='li_classt'>Məhsulu müştəriyə təqdim etmək;</li>
                                <li className='li_classt'>Mağazada olan məhsullar, xidmətlər və kampaniyalar haqqında müştəriyə ətraflı məlumat vermək;</li>
                                <li className='li_classt'>Müştərilərin tələb və suallarını diqqətlə dinləmək;</li>
                                <li className='li_classt'>Məhsullar haqqında məsləhətlər vermək və alış üçün seçimləri təklif etmək;</li>
                                <li className='li_classt'>Müştəri məmnuniyyətini yüksək səviyyədə qorumaq və təmin etmək;</li>
                                <li className='li_classt'>Satışın artırılması məqsədilə müştəriləri daim inandırmaq və məlumatlandırmaq.</li>
                            </ul>
                            <p className='teleb_34'><strong>Müraciət forması:</strong></p>
                            <ul className='ul_lerr'>
                                <li className='li_classt'>CV-ni <a href='mailto:mahirabbasli777@gmail.com' target={'_blank'}>mahirabbasli777@gmail.com</a> adresinə göndərin.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>



                </Accordion>

            </div>
        </div>
    )
}

export default Vakansiyalar;