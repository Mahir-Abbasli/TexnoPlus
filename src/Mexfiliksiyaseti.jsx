import React from "react";
import "./Sertler.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight as RightIcon } from "@fortawesome/free-solid-svg-icons";

const Mexfiliksiyaseti = () => {
  return (
    <div className="Termsofuse">
      <div className="Kecidler">
      <a href="/"> <span>Əsas səhifə</span></a> 
      <FontAwesomeIcon className='RightIcon' icon={RightIcon} />
      <label>Məxfilik siyasəti</label>
      </div>
      <h1>Məxfilik siyasəti</h1>
      <h5>Toplanan məlumatlar</h5>
      <p>
        Qeydiyyat prosesi zamanı qeydiyyat formasında göstərilmiş tələb olunan
        digər məlumatlarla yanaşı tam adınız, telefon nömrəniz, elektron poçt
        ünvanınız və faktiki ünvanınızı əldə edə bilərik. Veb-saytdakı
        fəaliyyətiniz zamanı siz kredit/debit kartı və ya PayPal hesabınızdan
        istifadə edərək sifariş yerləşdirdikdə biz sizin əməliyyat
        məlumatlarınızı əldə edə bilirik. Eyni zamanda, İP ünvanınız, istifadə
        etdiyiniz əməliyyat sisteminiz və brauzer məlumatlarınızı da toplayırıq.
      </p>
      <h5>Toplanış məlumatların istifadəsi</h5>
      <p>
        Biz sizin məlumatlarınızı aşağıdakı məqsədlərlə istifadə edə bilərik:
        Tələblərinizə cavab vermək məqsədilə xidmətlərimizi yaxşılaşdırmaq və
        təkmilləşdirmək üçün müştərilərimiz və onların tələbləri ilə daha
        yaxından tanış olmaq. Sizi daha yaxşı müştəri dəstəyi ilə təmin etmək.
        Sizinlə ünsiyyət qurmaq. Hesabınızla əlaqədar problemlərin aşkarı və
        aradan qaldırılması zamanı daşınma ilə bağlı sizi məlumatlandırmaq və ya
        yeni işlərimiz barədə məlumat əldə etməyinizə imkan yaratmaq
      </p>
      <h5>Təhlükəsizlik</h5>
      <p>
        Siz sifariş yerləşdirərkən və məxfi məlumatlarınızı (kredit və ya debit
        kartındakı məlumatlar) təqdim edərkən onların təhlükəsizliyi və
        məxfiliyi bizim tərəfimizdən tamamilə təmin olunur. Nəzərinizə çatdırmaq
        istərdik ki, bütün şəxsi məlumatlar Secure Socket Layer (SSL)
        texnologiyası vasitəsilə ötürülür. Sizin kredit/debit kart nömrələriniz
        və şəxsi məlumatlarınız saxlanılmayacaq, satılmayacaq və ya hər hansı
        üçüncü tərəflə paylaşılmayacaq.
      </p>
      <h5>Cookies</h5>
      <p>
        Biz sizin şəxsi məlumatlarınızın toplanılması üçün cookies-dən istifadə
        etmirik. İstifadə edə biləcəyimiz yeganə cookies izləmə sessiyasının
        İD-ləri və istifadəçi rejimidir.
      </p>
      <h5>Üçüncü tərəflər</h5>
      <p>
        Qüvvədə olan qanunvericiliyə müvafiq olaraq və ya Ödəniş Sistemi
        Təminatçısı kimi üçüncü tərəf xidmət təminatçıları və ya digər
        tranzaksiya prosessoru tərəfindən tələb olunmadığı halda biz sizin şəxsi
        məlumatlarınızı üçüncü tərəflərə ötürmürük.
      </p>
      
    </div>
  );
};

export default Mexfiliksiyaseti;
