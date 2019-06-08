var kullanici=require('../models/kullanici');

module.exports.index=function(req,res){
    res.render('login');
}

module.exports.indexPost=function(req,res){
    console.log(req.body);
    res.render('login',{
        username:req.body.username,
        password:req.body.password
    });
}

module.exports.signupGet=function(req,res){
    res.render('signup');
}

module.exports.signupPost=function(req,res){
    console.log(req.body);

    var yeniKullanici=new kullanici({
        ad:req.body.ad,
        soyad:req.body.soyad,
        email:req.body.email,
        kullaniciAdi:req.body.kullaniciAdi,
        sifre:req.body.sifre
    });
    console.log(yeniKullanici);
    yeniKullanici.save(function(err){
        if(err){

        }else{
            res.redirect('kullanicilarListesi');
        }
    });

    //res.render('signup');
}

module.exports.kullanicilarListesi=function(req,res){

    kullanici.find(function(err,results){
        //console.log(results);
        res.render('kullanicilarListesi',{
            kullanicilar:results
        });
    });


};

module.exports.kullaniciSil=function(req,res){
    kullanici.findOneAndRemove({kullaniciAdi:req.params.kullaniciAdi},function(err){
        if(err){
            console.log("hata");
        } else {
            res.redirect("/login/kullanicilarListesi");
        }
    });
    //console.log(req.params.kullaniciAdi);
    //res.redirect("/login/kullanicilarListesi");
}