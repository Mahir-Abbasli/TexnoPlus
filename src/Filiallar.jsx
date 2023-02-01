import React from 'react'
import './Filiallar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Filiallar = () => {
  return (
    <div>
      <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Filiallar</label>
      </div>
      <div className='filiallar_sozu'>Filiallar</div>
      <div className='iframe_map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11935.964475416074!2d49.84456509654231!3d40.377897686071385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e1!3m2!1saz!2s!4v1674809966497!5m2!1saz!2s"
          width="1170"
          height="500"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2 className='baki_seheri'>Bakı şəhəri</h2>
      <div className='filiallar_div'>
        <div className='filiallar_kicik_div_part'>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>AF Mall filialı</span>
            <span className='adres_filial'>Nəsimi rayonu, Səməd Vurğun<br/> küçəsi 34, AF Mall 2-ci mərtəbə</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>İnşaatçılar filialı</span>
            <span className='adres_filial'>Yasamal rayonu, Şərifzadə 162 (İnşaatçılar metrosunun yanı)</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>Gənclik filialı</span>
            <span className='adres_filial'>Nərimanov rayonu, Fətəli Xan <br/> Xoyski küçəsi 112A</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>20 yanvar filialı</span>
            <span className='adres_filial'>Nəsimi rayonu, Moskva prospekti 52</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
        </div>
        <div className='filiallar_kicik_div_part'>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>Əhmədli filialı</span>
            <span className='adres_filial'>Xətai rayonu, Məhəmməd Hadi <br/> küçəsi 21D</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>İçərişəhər filialı</span>
            <span className='adres_filial'>Səbail rayonu, Lermontov küçəsi <br /> 40A</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>Bakıxanov filialı</span>
            <span className='adres_filial'>Sabunçu rayonu, Sakit Qocayev <br /> küçəsi 25</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
          <div className='filiallar_kicik_div'>
            <span className='adi_filial'>Nizami filialı</span>
            <span className='adres_filial'>Yasamal rayonu, Cəfər Cabbarlı küçəsi 44 ("Caspian Plaza" -nın yanı)</span>
            <span className='is_saati_filial'>İş saatı: 10:00-21:00</span>
            <span className='tel_filial'>Tel: (+994 12) 478 98 60</span>
            <span className='mob_filial'>Mob: (+994 50) 977 11 81</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filiallar
