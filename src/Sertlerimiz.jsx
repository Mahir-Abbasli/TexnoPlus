import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";



const Sertlerimiz = () => {
  return (
    <div>
       <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Məxfilik siyasəti</label>
      </div>
      <h1>Şərtlərimiz</h1>
      <h5>Sifariş, çatdırılma, qaytarma və dəyişmə razılaşması</h5>
      <div className="MainTerms">
        <h5>Əsas anlayışlar:</h5>
        <div className="MainTerms1">
          <em>Alıcı razılaşması - </em>
          <span>
            bu sənəddə onlayn alış ilə bağlı aşağıda əks olunan bütün şərtlər;
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>ALICI - </em>
          <span>
            texnoplus.az onlayn platformasının verdiyi texniki imkanlar vasitəsi
            ilə və elektron ödəniş edərək portalda qeyd olunmuş mal və
            xidmətləri sifariş edən /alan, həmçinin bu “Qaytarma və dəyişdirmə
            razılaşması”nın şərtləri ilə razılaşan fiziki və ya hüquqi şəxs;
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>SATICI - </em>
          <span>
            özünə məxsus texnoplus.az portalında öz mallarını/xidmətlərini
            onlayn qaydada satan və satış və çatdırılma şərtlərini özü müəyyən
            edən fiziki və ya hüquqi şəxs;
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>PORTAL - </em>
          <span>
            mal və xidmətlərin onlayın alış-veriş məkanı olan, TexnoPlus
            Electronics MMC-yə məxsus “www.texnoplus.net” internet səhifəsi;
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>MAL(LAR)/XİDMƏT(LƏR) - </em>
          <span>
            PORTALDA yerləşdirilmiş hər hansı mallar, xidmətlər, təchizatlar,
            materiallar, əşyalar və digər material və əmtəələr (o cümlədən
            onların quraşdırılması və ya istənilən hissəsi);
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>SİFARİŞ - </em>
          <span>
            Alıcının müəyyən etdiyi ünvana çatdırılması məqsədilə Portaldan
            mal/xidmət alınması məqsədilə Portalda mövcud olan müvafiq formanın
            doldurularaq SATICIya elektron formada göndərilməsi.
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>QAYTARMA - </em>
          <span>
            ALICININ PORTALDAN əldə etdiyi MALI(LAR)/XİDMƏTİ(LƏR) SATICIYA
            təqdim edərək ödənilmiş məbləği geri alması.
          </span>
          <br />
        </div>
        <div className="MainTerms1">
          <em>DƏYİŞMƏ - </em>
          <span>
            ALICININ PORTALDAN əldə etdiyi MALI(LAR)/XİDMƏTİ(LƏR) SATICIYA
            təqdim edərək əvəzində başqa MALI(LAR)/XİDMƏTİ(LƏR) alması.
          </span>
          <br />
        </div>
      </div>
      <div className="SpecialTerms">
        <h5 style={{ marginTop: "50px" }}>Xüsusi şərtlər:</h5>
        <p>
          1. Razılaşmanın predmetini ALICI tərəfindən şəxsi və digər məqsədər
          üçün PORTALDA əks olunan malların/xidmətlərin alınması, qaytarması,
          dəyişməsi və digər formada istifadəsində imkan yaradılması təşkil
          edir. Bu Razılaşma şərtləri PORTALDA cari vaxtda satışda olan bütün
          mal və xidmətlərə şamil olunur.
        </p>
        <p>
          2. PORTALDA satılan mallar/xidmətlər üzrə qaytarma və dəyişmə şərtləri
          qüvvədə olan İstehlakçı Hüquqlarının Müdafiəsi haqqında Azərbaycan
          Respublikasının qanununun 15-ci maddəsi ilə tənzimlənir.
        </p>
        <p>
          3. PORTALDAN mal sifariş edən ALICI bu RAZILAŞMAnın şərtləri ilə tam
          razılaşdığını bəyan edir.
        </p>
        <p>
          4. SATICI alış həyata keçirilənədək alış şərtlərini heç kimə
          xəbərdarlıq etmədən dəyişdirə bilər.
        </p>
        <p>
          5. Alış o vaxt baş tutmuş sayılır ki, ALICI malın/xidmətin dəyərini
          kassa çeki və ya alqı-satqını təsdiq edən digər sənəd qarşılığında hər
          hansı formada (onlayn/nağd) ödəmiş olsun.
        </p>
        <p>
          6. PORTALDA olan sifariş formasını doldurmaqla ALICI özünə aid əlaqə
          vasitələri barədə məlumatların SATICI tərəfindən istifadəsinə etiraz
          etmir. Bura gələcəkdə ALICIya müxtəlif endirim kompaniyaları, digər
          əlaqəli məlumatların göndərilməsi aiddir.
        </p>
        <p>
          7. ALICI sifariş etməklə SATICInın öz öhdəliklərinin icrasını 3-cü
          şəxslərə tapşırmasına etiraz etmir və SATICI sifariş ilə bağlı 3-cü
          şəxslərin bu RAZILAŞMAdan kənara çıxan hərəkətlərinə görə məsuliyyət
          daşıyır.
        </p>
        <p>
          8. “www.texnoplus.net” səhifəsində texniki-profilaktik işlərin
          aparıldığı günlərdən, fors-major hallardan başqa, ALICI günün, ayın,
          ilin instənilən vaxtı PORTALın xidmətlərindən istifadə edə bilər.
          PORTALın iradəsindən kənar səbəblərdən dolayı PORTALın fəaliyyətinin
          istənilən müddətdə dayanması, habelə SATICInın bu Razılaşmadan irəli
          gələn öhdəliklərinin icrasının qeyri-mümkünlüyü səbəbindən ALICIya
          zərər dəyərsə, bu halda SATICI hər hansı məsuliyyət daşımır.
        </p>
        <p>
          9. PORTALDA satış üçün nəzərdə tutulmuş malların şəkilləri illüstrativ
          təyinatlı olmaqla alınmış malla 100% eyni olmaya bilər. Məlumatlarda
          əhəmiyyətli çatışmamazlıq olduğu təqdirdə, ALICI PORTALA yazılı
          müraciət ünvanlaya bilər.
        </p>
        <p>
          10. PORTALDA görsənməsinə baxmayaraq əgər sifariş verilmiş mal
          SATICInın anbarında yoxdursa, SATICI bu barədə ən qısa vaxt ərzində
          ALICIya xəbər verməklə sifarişi ləğv edir. Sifarişin ləğvi nəticəsində
          ALICIya hər hansı real zərər dəyərsə, buna görə SATICI məsuliyyət
          daşımır.
        </p>
      </div>
      <div className="DeliveryTerms">
        <h5 style={{ marginTop: "40px" }}>Çatdırılma qaydaları:</h5>
        <p>
          Mağazalarımızın olduğu bölgələrdə dəyəri 30 AZN-dən yuxarı olan
          məhsulların istər kredit, istərsə də nağd, taksit kartları ilə alışı
          zamanı çatdırılma xidməti mövcuddur və pulsuzdur.
        </p>
        <p>
          Böyük məişət əşyaları ilk 3 iş günü ərzində çatdırılır və növbəti ilk
          3 iş günü ərzində quraşdırılır. Digər məhsullar 24 saat ərzində
          çatdırılır.
        </p>
        <p>
          Yalnız online sifariş kateqoriyasında olan məhsullər ilk 3 iş günü
          ərzində çatdılır.
        </p>
        <p>
          Çatdırılan məhsul yalnız onlayn alış edən müştərinin özünə verilə
          bilər. Heç bir halda digər şəxsə verilmir.
        </p>
        <p>
          Onlayn qaydada kreditlə məhsul sifariş verildikdə məhsulun
          çatdırılması zamanı şəxsiyyət vəsiqəsi sahibinin identifikasiyasının
          təsdiqi üçün çəkiliş aparıla bilər
        </p>
        <p>
          Sifariş çatdırılan zaman müştəri müqaviləyə imza çəkməli, şəxsiyyət
          vəsiqəsinin əslini kuryerə təqdim etməli və həmin vəsiqənin surətini
          ona verməlidir.
        </p>
      </div>
    </div>
  );
};

export default Sertlerimiz;
