try {
  hello();
} catch (err) {
  console.error(err);
  // beklenen çıktı: ReferenceError: hello is not defined
  // hata mesajları tarayıcıya göre değişiklik gösterecektir
} finally {
  //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}

// Üçüncü parti bir kütüphaneye ait bir method kullanıyorsanız ve dönüşü ile ilgili
// elinizde müdahale şansı yoksa, try-catch içine alıp olası bir hatayı kontrol altına alabilirsiniz.
// Örneğin, base64 ile kodlanmış ile yüklenmiş imaj...
