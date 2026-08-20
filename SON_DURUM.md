# Murat İnşaat / Murat Yapı & Hizmet - Son Durum

* **Son Güncelleme:** 2026-08-20 15:25
* **Aktif Model:** Antigravity
* **Mevcut Aşama:** Mobil Menü Saydamlık & Scroll Lock Düzeltmesi Tamamlandı
* **Son Commit:** `[antigravity] fix: tam opak mobil menu, scroll lock ve hero rozet temizligi` (`3eec7e1`)
* **GitHub Deposu:** `https://github.com/asujai/muratin-aat.git` (Branch: `main`)
* **Tamamlanan İşler:**
  - Mobil hamburger menü (3 çizgi) açıldığında arkadaki sayfanın görünmesi (saydamlık) ve arkadaki panelin kayması engellendi. Menü %100 opak tam ekran ve arkadaki kaydırmayı kilitleyen (`body.style.overflow = 'hidden'`) yerel uygulama modalına dönüştürüldü.
  - Hero alanının en üstündeki *"Trabzon & Karadeniz Hizmet Ağı"* rozet kutusu kaldırıldı.
  - Değişiklikler GitHub `main` dalına push edildi.
* **Doğrulama:** `npm run build` hatasız tamamlandı, GitHub push başarılı.
* **Bilinen Sorunlar:** Yok.
* **Önerilen Sonraki Adım:** Netlify üzerinden güncel halin test edilmesi.
