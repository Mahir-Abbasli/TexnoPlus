import React from "react";
import "./Haqqimizda.css";
import img1 from './image/delivery.png'
import img2 from './image/guaranteed.png'
import img3 from './image/security.png'
import img4 from './image/history.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";
import "./Sertler.css"


const Haqqimizda = () => {
  return (
    <div>
       <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Haqqımızda</label>
      </div>
      <div className="AboutUs">Haqqımızda</div>
      <div className="About1">
        <strong>Biz kimik?</strong>
        <div className="WhoWe">
          Hər bir böyük biznes hekayəsi kimi bizim hekayəmiz də müştəridən, yəni
          səndən başlayır. Sənin istək və ehtiyacların bizim üçün çox vacibdir.
          Əsas məqsədimiz ən yaxşı xidmət göstərməklə səni sevindirmək və
          büdcənə, istəyinə uyğun, düzgün məhsul seçimi etməkdə sənə yardımçı
          olmaqdır. “Kontakt – Sevindirir” ifadəsini də məhz bunun üçün özümüzə
          sloqan olaraq seçmişik. Rəqəmsal və məişət texnikası, mebel və tekstil
          satışı üzrə ölkənin ən böyük mağazalar şəbəkəsindən biri kimi səni
          sevindirmək üçün nələr edirik?
        </div>
        <div className="About2">
          <li className="lis">
            <strong>Sevilən brendləri sənə daha yaxın gətiririk</strong>
            <span>
              Biz Samsung, LG, Bosch, Huawei, Realme, Sony, Panasonic, BQ,
              Sonorous, Elari, Thomas, Beurer, Black & Olufsen, Karcher, H Gala,
              Cassore, Simge mobilya kimi 30-dan çox beynəlxalq brendin rəsmi
              distributoru, Dyson, Toshiba, Electrolux, WHAL, Black&Decker,
              Hoffmann kimi beynəlxalq brendlərin Azərbaycanda eksklüziv
              distributoru, Apple brendinin isə rəsmi satış mərkəziyik. Brend
              portfoliomuz durmadan böyüyür, odur ki, sevdiyin dünya
              brendlərinin məhsullarını rahatlıqla Kontakt Home mağazalarından
              əldə edə bilərsən.
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>Axtardığın hər şeyi bir məkana toplamışıq</strong>
            <span>
              İş, dərs, ev, əyləncə və istirahət üçün arzuladığın məhsulların
              çox geniş çeşidini eyni məkanda – “TexnoPlus” mağazalarımızda tapa
              bilərsən. “TexnoPlus Special” konsept mağazalarımızda isə rəqəmsal
              texnikanın geniş çeşidi təqdim olunub. Rahatlığın üçün
              mağazalarımızın yerini sənə ən rahat ünvanlarda seçmişik.
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>Sərfəli təkliflər ilə üzünü güldürürük</strong>
            <span>
              İstər nağd, istərsə də hissəli alış şərtlərini uyğun etməklə,
              istədiyin məhsulları daha rahat əldə əldə etməyinə şərait
              yaradırıq. “Axşam bazarı”, “Şeş Qoşa”, “Fərqin 120%-ni geri al”
              kimi kampaniyalar isə artıq hamının ən sevimli kampaniyalarına
              çevrilib.
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>
              Sənin məmnunluğun üçün əlavə xidmətlər təklif edirik
            </strong>
            <span>
              Məhsullarımıza 3 ilədək rəsmi zəmanət təqdim edirik. Bütün zəmanət
              müddətində məhsulla bağlı hər hansı çətinliyin yaranarsa, partnyor
              servis mərkəzləri ilə çətinliyini qısa müddətdə aradan qaldırırıq.
              Bundan başqa, rahatlığını düşünərək məhsulun təmirdə olduğu
              müddətdə sənə əvəzləyici məhsul təklif edirik. İşdir, məhsulunun
              təmiri partnyor servis mərkəzlərində 14 gün ərzində yekunlaşmazsa,
              biz o məhsulu sənin üçün tamamilə yenisi ilə əvəz edəcəyik. Bəli,
              bu qədər iddialıyıq.
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>Sosial öhdəliyimizi yerinə yetiririk</strong>
            <span>
              Həyata keçirdiyimiz və dəstək olduğumuz sosial məsuliyyət
              layihələri ilə cəmiyyətdə yeni müsbət dəyərlər yaratmağa
              çalışırıq.
            </span>
          </li>
        </div>
        <div className="About2">
          <li className="lis">
            <strong>Həmişə əlçatanıq</strong>
            <span>
              Sənə bir zəng qədər yaxınıq. *9955 Çağrı Mərkəzinə zəng edərək
              məhsul və xidmətlərimizlə bağlı bütün suallarını ünvanlaya
              bilərsən. Bizi həmçinin sosial şəbəkələrdə də asanlıqla tapa
              bilərsən.
            </span>
          </li>
        </div>
      </div>
      <div className="About3">
        <strong>Tariximiz</strong>
        <ul>
          <li className="lis">
            Kiçik mağazadan ölkənin ən böyük riteyl şəbəkələrindən birinə
            çevrildik. İlk gündən bu yana inkişaf tempimiz sürətlə artdı.
            Məqsədimiz həmişə artan məhsul və xidmətlərimizlə sənə daha çox
            sevinc yaşatmaqdır
            <li>
              2006-cı ildə mobil telefon, aksessuar və mobil nömrələrin satışını
              həyata keçirən ilk kiçik mağaza ilə fəaliyyətə başladıq. Eyni ildə
              daha 3 mağazamızı istifadəyə verdik. İlk mağazalarımızın adı
              “TexnoPlus” idi.
            </li>
          </li>
          <li className="lis">
            2010-cu ildə təklif etdiyimiz məhsulların sırasına kompüter və
            fotoaparat kateqoriyalarını əlavə etdik, həmçinin xidmət sahəsini
            bir qədər genişləndirdik.
          </li>
          <li className="lis">
            2011-ci ildə məhsul kateqoriyaları siyahısına məişət texnikası əlavə
            olundu. Mağazalarımızın təklif etdiyi məhsulların növ və çeşidliliyi
            daha da artdı və şəbəkənin adını “Texno Electronics” adına
            dəyişdik.
          </li>
          <li className="lis">
            2013-cü ildə geniş elektronika və məişət texnikası kateqoriyalarının
            sırasına mebel kateqoriyası da əlavə olundu. Həmin ildən etibarən
            yerli və xarici brendlərin, həmçinin öz fabrikimizin istehsal etdiyi
            mebellər də mağazalarımızda satışa çıxarıldı. Bununla da “Plus”
            konsepti tamamlanaraq, şəbəkənin adı “Kontakt Plus” adına
            dəyişdirildi.
          </li>
          <li className="lis">
            Hazırda 30-dan çox beynəlxalq brendin rəsmi distributeri olaraq
            Azərbaycan üzrə 31 mağaza və 1 online mağaza ilə xidmət etməyə davam
            edirik.
          </li>
        </ul>
      </div>
      <div className="About4">
        <div className="firstdelivery">
        <img src={img1}></img>
        <div className="caption">
        <span className="st">Sürətli çatdırılma</span>
        <span className="sn">Bütün ölkəyə çatdırılma edirik</span>
        </div>
        </div>
        <div className="firstdelivery2">
        <img src={img2}></img>
        <div className="caption">
        <span className="st">Zəmanət</span>
        <span className="sn">Saytda olan bütün mәhsullara zəmanət</span>
        </div>
        </div>
        <div className="firstdelivery3">
        <img src={img3}></img>
        <div className="caption">
        <span className="st">100% Təhlükəsiz</span>
        <span className="sn">Ödəniş</span>
        </div>
        </div>
        <div className="firstdelivery4">
        <img src={img4}></img>
        <div className="caption">
        <span className="st">24/7</span>
        <span className="sn">Xidmət</span>
        </div>
        </div>
      
        
      </div>
    </div>
  );
};

export default Haqqimizda;
