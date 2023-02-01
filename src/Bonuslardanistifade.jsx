import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Bonuslardanistifade = () => {
  return (
    <div>
       <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Bonuslardan istifadə</label>
      </div>
      <h1>Bonuslardan istifadə</h1>
      <h5 style={{ display: "inline" }}>Bonus - </h5>
      <span style={{ display: "inline" }}>
        “TexnoPlus” mobil tətbiqinin istifadəçilərinə şamil edilən
        stimullaşdırıcı maliyyə ekvivalentidir.
      </span>
      <h5>Ümumi şərtlər</h5>
      <ol className="Listes">
        <li>
          Bonus 18 yaşına çatmış fiziki şəxslərə tətbiqi yükləyərkən və hər alış
          zamanı (taksitli alış istisna) təqdim edilir.
        </li>
        <li>
          “TexnoPlus Electronics” MMC bonus proqramının şərtlərini və
          qaydalarını yenidən müəyyənləşdirmək hüququnu özündə saxlayır.
        </li>
        <li>
          “TexnoPlus” mobil tətbiqini yükləmiş istifadəçi şəxsi məlumatlarının
          bonus proqramı çərçivəsində istifadəsinə tam icazə verir.
        </li>
        <li>
          Müştəri reklam xarakterli informasiyanın sms, elektron poçt və zəng
          vasitəsilə ona çatdırılmasına tam icazə verir.
        </li>
      </ol>
      <h5>Bonusun toplanma qaydası</h5>
      <ol className="Listes">
        <li>
          Mobil tətbiqdə qeydiyyatdan keçdikdən sonra müştərinin balansına{" "}
          <strong> 10 AZN </strong> bonus yüklənir.
        </li>
        <li>
          Yerindən asılı olmayaraq{" "}
          <strong>nağd və ya hissəli (taksit kartları istisna)</strong> alışı
          zamanı müştəri etdiyi bütün alışların dəyərinin 1%-ini bonus olaraq
          qazanır.
        </li>
        <li>
          Nağd və ya hissəli (taksit kartları istisna) alış zamanı məhsul{" "}
          <strong> “Qızıl zəmanət” </strong> ilə birlikdə əldə olunubsa, bonus
          yekun məbləğə əsasən hesablanır.
        </li>
        <li>
          Bonus, alış təsdiqləndikdən sonra avtomatik olaraq müştərinin şəxsi
          hesabında gözlənilən bonus bölməsinə köçürülür.
        </li>
        <li>
          Gözlənilən bonus <strong> 14 gün </strong> sonra aktiv edilir.
        </li>
        <li>
          {" "}
          <strong>
            {" "}
            1 Azərbaycan manatı (AZN) 0.01 bonusa ekvivalentdir.{" "}
          </strong>
        </li>
        <li>
          Bonus ancaq alış-veriş zamanı istifadə edilə bilər.{" "}
          <strong> Bonusu nağdlaşdırmaq </strong> mümkün deyil.
        </li>
        <li>
          Kampaniya şərtlərinə müvafiq olaraq qazanılan bonusun hesablanma
          qaydası fərqli ola bilər.
        </li>
      </ol>
      <h5>Bonusdan istifadə qaydası</h5>
      <ol className="Listes">
        <li>
          Müştəri aktivləşmiş bonus ilə TexnoPlus mağazalarından, “TexnoPlus” mobil
          tətbiqindən və irshad.az onlayn mağazasından məhsulun nağd və ya
          kartla birdəfəlik alışı zamanı (taksitli alışlara şamil olunmur)
          məhsulun qiymətinin maksimum <strong> 25%-ə </strong> qədər hissəsini
          bonusla ödəyə bilər. (Məsələn, 500 AZN dəyərindəki hər hansı X
          məhsulunu bonusla almaq üçün məhsulun dəyərinin <strong>25%</strong>{" "}
          -i, yəni 125 AZN-i bonusla ödəmək mümkündür. Yerdə qalan məhsulun{" "}
          <strong> 75%</strong>-i, yəni 375 AZN məbləğ isə nağd şəkildə
          ödənilir. 375 AZN-ə görə əlavə bonus qazanılır.)
        </li>
        <li>
          Hissəli aylıq ödəniş zamanı bonuslardan istifadə{" "}
          <strong> edilə bilməz </strong> və hissəli aylıq ödəniş bonus
          qazandırmır.
        </li>
        <li>
          Bonusların istifadə edilməsi üçün son istifadə tarixi mövcud deyil.
        </li>
        <li>
          Satış zamanı yalnız bir müştərinin hesabına bonus əlavə edilə bilər və
          ya çıxıla bilər.
        </li>
        <li>
          Məhsulların qaytarılması zamanı bu məhsulun alınmasında hesablanmış
          bonus müştərinin bonus balansından silinir.
        </li>
        <li>
          <strong>
            1 (bir) bonus 1 (bir) Azərbaycan manatına (AZN) ekvivalentdir.
          </strong>
        </li>
      </ol>
    </div>
  );
};

export default Bonuslardanistifade;
