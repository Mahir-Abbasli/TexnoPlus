import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const IstifadeSertleri = () => {
  return (
    <div className="Termsofuse">
       <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>İstifadə şərtləri</label>
      </div>
      <h1>İstifadə şərtləri</h1>
      <h5>Ümumi</h5>
      <p>
        Veb-saytımızın ziyarətçisi və ya qeydiyyatdan keçmiş istifadəçisi
        olmağınızdan asılı olmayaraq saytımızdan istifadə etməklə və saytımız
        vasitəsilə məhsul almaqla bu şərtləri oxuyub, anlayıb və qəbul
        etdiyinizi təsdiqləmiş olursunuz. Zəhmət olmasa, yadda saxlayın ki, bu
        Şərtlər sizə əvvəlcədən heç bir xəbərdarlıq edilmədən vaxtaşırı olaraq
        bizim səlahiyyətimiz çərçivəsində dəyişilə bilər. Bu Şərtlərlə
        razılaşmadığınız təqdirdə, bu veb-saytdan istifadəni və veb-sayt
        üzərindən məhsul alışı prosesini dayandıra bilərsiniz. "Biz", "bizə",
        "bizim" və ya "vebsayt" terminləri ilə TexnoPlus "siz", "sizin" və ya
        "istifadəçi" sözləri ilə isə müştəri nəzərdə tutulur. Bu xidmət
        Azərbaycan, Bakı şəhəri, "TexnoPlus Electronics." MMC-yə məxsusdur və
        onun bir hissəsi hesab olunur.
      </p>
      <h5>İmtina</h5>
      <p>
        Veb-saytımızda qeyd olunan məlumatların dəqiqliyini təmin etmək üçün
        əlimizdən gələni etdik. Lakin biz bu məlumatların tamlığı və ya
        düzgünlüyü, həmçinin, veb-saytımızda xətaların baş verməməsi ilə bağlı
        zəmanət vermirik. Bu cür xətalar və ya nöqsanlarla bağlı məsuliyyətdən
        imtina edirik. Vebsaytın istifadəçisi hər hansı davranışına görə yalnız
        özü məsuliyyət daşıyır.
      </p>
      <h5>Müştəri Profili</h5>
      <p>
        Veb-saytımızda qeydiyyatdan keçmək üçün sizdən qeydiyyat formasındakı
        müəyyən məlumatları təmin etmək və istifadəçi adı və şifrəni qeyd etmək
        tələb olunur. Şifrənizi məxfi saxlamaqla bağlı yalnız özünüz məsuliyyət
        daşıyırsınız. Şifrənizi üçüncü tərəflərə verməyin. Məxfilik
        Qaydalarımıza müvafiq olaraq biz sifarişinizi həyata keçirmək və ya
        digər məhdud məqsədlərlə bağlı olaraq sizin şəxsi məlumatlarınızdan
        istifadə edəcəyik. Zəhmət olmasa, qeydiyyat zamanı bizə verdiyiniz
        məlumatların düzgünlüyünü və tamlığını təmin edin.
      </p>
      <h5>Məhsullar</h5>
      <p>
        Veb-syatımız orijinal və yüksək keyfiyyətli məhsulları təklif edir. Biz
        müştərilərimizə məhsulun tam şəkildə təsvirini verməklə yanaşı onu öz
        veb-saytımızda vizual şəkildə də göstəririk.
      </p>
      <h5>Məhsulun Mövcudluğu</h5>
      <p>
        Sifariş qəbul olunmadığı təqdirdə biz veb-saytımızda göstərilən
        məhsullar barədə məlumatlara, məsələn, qiymətlər, məhsulların təsvirinə
        və ya mövcudluğu barədə məlumatlara istənilən vaxt dəyişiklik etmək
        hüququna malikik.
      </p>
      <h5>Qiymətlər</h5>
      <p>
        Bizim veb-saytımızda siz məhsulların qiymətlərini əldə edə bilərsiniz.
        Veb-saytımızda göstərilmiş qiymətlər onlayn alqı-satqıya şamil olunur.
      </p>
      <h5>Ödəniş</h5>
      <p>
        Biz ödənişləri Azərbaycan manatı ilə Visa və MasterCard credit/debit
        card istifadə olunmaqla onlayn qaydada və ya kuryerlərə nağd pulla qəbul
        edirik. Ödəniş üsulu kimi "Credit Card Online" seçdikdən sonra Müştəri
        İD-də (Kart sahiblərinin İD-si) göstərilmiş məlumatlar alqını həyata
        keçirmək üçün istifadə olunmuş kredit kartındakı məlumatlarla tamamilə
        uyğunluq təşkil etməlidir.
      </p>
    </div>
  );
};

export default IstifadeSertleri;
