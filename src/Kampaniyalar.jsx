import React from 'react'
import './Kampaniyalar.css'
import img1 from './image/samsung-sayt-kampaniya-1-0.jpg'
import img2 from './image/samsung-sayt-kampaniya-2-0.jpg'
import img3 from './image/samsung-sayt-kampaniya-3-0.jpg'
import img4 from './image/samsung-sayt-kampaniya-4-0.jpg'
import img5 from './image/samsung-sayt-kampaniya-5-0.jpg'
import img6 from './image/samsung-sayt-kampaniya-6-0.jpg'
import img7 from './image/samsung-sayt-kampaniya-7-0.jpg'
import img8 from './image/samsung-sayt-kampaniya-8-0.jpg'
import img9 from './image/samsung-sayt-kampaniya-9-0.jpg'
import img10 from './image/samsung-sayt-kampaniya-10-0.jpg'
import img11 from './image/samsung-sayt-kampaniya-11-0.jpg'
import img12 from './image/samsung-sayt-kampaniya-12-0.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Kampaniyalar = () => {
  return (
    <section>
      <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Kampaniyalar</label>
      </div>
      <div>
        <h1 className='h1_class'>Kampaniyalar</h1>
        <div class='tum_xeber'>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img10} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>1 Fevral - 28 Fevral</p>
                <p className='cumle1'>Yeni il, Yeni sən, Yeni Galaxy! </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img2} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>3 Fevral - 2 Mart</p>
                <p className='cumle1'>Arzuladığın məhsullar, sərfəli şərtlərlə! </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img3} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>18 Yanvar - 23 Fevral</p>
                <p className='cumle1'>Galaxy həftəsi başladı! </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
          </div>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img4} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>5 Fevral - 27 Fevral</p>
                <p className='cumle1'>Samsung TV hədiyyəli gələcək </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img5} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>1 Fevral - 25 Fevral</p>
                <p className='cumle1'>Yenilənmiş Huawei nova Y70</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img6} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>5 Fevral - 26 Fevral</p>
                <p className='cumle1'>Hər kəsin smartfonu Blackview </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
          </div>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img7} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>3 Fevral - 15 Mart</p>
                <p className='cumle1'>Kieslect saatları artıq satışda! </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img8} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>1 Fevral</p>
                <p className='cumle1'>Galaxy Unpacked 2023 </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img9} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>10 Fevral - 5 Mart</p>
                <p className='cumle1'>Oppo axtaran, bizdə tapar </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
          </div>
          <div className='full_div'>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img1} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>7 Fevral - 27 Fevral</p>
                <p className='cumle1'>Samsung hədiyyəli təklif </p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img11} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>17 Yanvar - 31 Yanvar</p>
                <p className='cumle1'>Hədiyyəli "IPhone"lar daha sərfəlidir!</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
            <div className='xeber'>
              <div className='sekil_div1'>
                <img src={img12} />
              </div>
              <div className='tarix_soz_1'>
                <p className='tarix1'>17 Yanvar - 31 Yanvar</p>
                <p className='cumle1'>Notbukları 12 aya faizsiz böl.</p>
              </div>
              <div className='pointer'>
                <div className='zaman1'><span>08 Gün 03 : 57 : 44</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kampaniyalar