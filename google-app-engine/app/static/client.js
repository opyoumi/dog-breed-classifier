var el = x => document.getElementById(x);

var breed_bg = {
'affenpinscher': 'Афенпинчер',
 'afghan_hound':'Афганска хрътка',
 'african_hunting_dog':'Хиеново куче',
 'airedale': 'Еърдейл териер',
 'american_staffordshire_terrier':'Американски стафордширски териер',
 'appenzeller':'Апенцелер зененхунд',
 'australian_terrier':'Австралийски териер',
 'basenji':'Басенджи',
 'basset':'Басет',
 'beagle':'Бийгъл',
 'bedlington_terrier':'Бедлингтон териер',
 'bernese_mountain_dog':'Бернски зененхунд',
 'black-and-tan_coonhound':'Черно-кафяв кунхаунд',
 'blenheim_spaniel':'Кинг Чарлз шпаньол',
 'bloodhound':'Блъдхаунд',
 'bluetick':'Блутик кунхаунд',
 'border_collie':'Бордър коли',
 'border_terrier':'Бордър териер',
 'borzoi':'Борзая',
 'boston_bull':'Бостън териер',
 'bouvier_des_flandres':'Фландърско бувие',
 'boxer':'Боксер',
 'brabancon_griffon':'Брюкселски грифон',
 'briard':'Бриар',
 'brittany_spaniel':'Бретански шпаньол',
 'bull_mastiff':'Булмастиф',
 'cairn':'Кеърнтериер',
 'cardigan':'Уелско корги кардиган',
 'chesapeake_bay_retriever':'Чесапийк бей ретривър',
 'chihuahua':'Чихуахуа',
 'chow':'Чау-чау',
 'clumber':'Кламбър шпаньол',
 'cocker_spaniel':'Кокер шпаньол',
 'collie':'Коли',
 'curly-coated_retriever':'Къдравокосмест ретривър',
 'dandie_dinmont':'Данди динмонт териер',
 'dhole':'Азиатско диво куче',
 'dingo':'Динго',
 'doberman':'Доберман',
 'english_foxhound':'Английски фоксхаунд',
 'english_setter':'Английски сетер',
 'english_springer':'Английски спрингер шпаньол',
 'entlebucher':'Ентлебухер зененхунд',
 'eskimo_dog':'Американско ескимоско куче',
 'flat-coated_retriever':'Гладкокосмест ретривър',
 'french_bulldog':'Френски булдог',
 'german_shepherd':'Немска овчарка',
 'german_short-haired_pointer':'Немски късокосмест пойнтер',
 'giant_schnauzer':'Ризеншнауцер',
 'golden_retriever':'Голдън ретрийвър',
 'gordon_setter':'Шотландски сетер',
 'great_dane':'Немски дог',
 'great_pyrenees':'Пиренейско планинско куче',
 'greater_swiss_mountain_dog':'Голямо швейцарско планинско куче',
 'groenendael':'Белгийска овчарка Грьонендал',
 'ibizan_hound':'Хрътка от Ибиса',
 'irish_setter':'Ирландски сетер',
 'irish_terrier':'Ирландски териер',
 'irish_water_spaniel':'Ирландски воден шпаньол',
 'irish_wolfhound':'Ирландски вълкодав',
 'italian_greyhound':'Италиански грейхаунд',
 'japanese_spaniel':'Японски хин',
 'keeshond':'Вълчи шпиц',
 'kelpie':'Австралийско келпи',
 'kerry_blue_terrier':'Кери син териер',
 'komondor':'Комондор',
 'kuvasz':'Кувас',
 'labrador_retriever':'Лабрадор ретривър',
 'lakeland_terrier':'Лейкланд териер',
 'leonberg':'Леонбергер',
 'lhasa':'Лхаса апсо',
 'malamute':'Аляски маламут',
 'malinois':'Белгийска овчарка Малиноа',
 'maltese_dog':'Малтийска болонка',
 'mexican_hairless':'Мексиканско голо куче',
 'miniature_pinscher':'Мини пинчер',
 'miniature_poodle':'Малък пудел',
 'miniature_schnauzer':'Миниатюрен шнауцер',
 'newfoundland':'Нюфаундленд',
 'norfolk_terrier':'Норфолкски териер',
 'norwegian_elkhound':'Норвежки елкхунд',
 'norwich_terrier':'Норички териер',
 'old_english_sheepdog':'Староанглийска овчарка',
 'otterhound':'Отерхунд',
 'papillon':'Папийон',
 'pekinese':'Пекинез',
 'pembroke':'Уелско корги пембрук',
 'pomeranian':'Померан',
 'pug':'Мопс',
 'rhodesian_ridgeback':'Родезийски риджбек',
 'redbone':'Редбон кунхаунд',
 'rottweiler':'Ротвайлер',
 'saint_bernard':'Санбернар',
 'saluki':'Салуки',
 'samoyed':'Самоед',
 'schipperke':'Шиперке',
 'scotch_terrier':'Шотландски териер',
 'scottish_deerhound':'Шотландска еленова хрътка',
 'sealyham_terrier':'Силихам териер',
 'shetland_sheepdog':'Шетландска овчарка',
 'shih-tzu':'Ши цу',
 'siberian_husky':'Сибирско хъски',
 'silky_terrier':'Австралийски копринен териер',
 'soft-coated_wheaten_terrier':'Ирландски мекокосмест пшеничен териер',
 'staffordshire_bullterrier':'Стафордширски бултериер',
 'standard_poodle':'Стандартен пудел',
 'standard_schnauzer':'Стандартен шнауцер',
 'sussex_spaniel':'Съсекс шпаньол',
 'tibetan_mastiff':'Тибетски дог',
 'tibetan_terrier':'Тибетски териер',
 'toy_poodle':'Той пудел',
 'toy_terrier':'Английски той териер',
 'vizsla':'Унгарска визла',
 'walker_hound':'Триинг Уолкър Кунхаунд',
 'weimaraner':'Ваймаранер',
 'welsh_springer_spaniel':'Уелски спрингерспаниел',
 'west_highland_white_terrier':'Западнохайландски бял териер',
 'whippet':'Уипет',
 'wire-haired_fox_terrier':'Твърдокосмест фокстериер',
 'yorkshire_terrier':'Йоркширски териер'
};

function showPicker(inputId) { el('file-input').click(); }

function showPicked(input) {
    el('upload-label').innerHTML = input.files[0].name;
    var reader = new FileReader();
    reader.onload = function (e) {
        el('image-picked').src = e.target.result;
        el('image-picked').className = '';
    }
    reader.readAsDataURL(input.files[0]);
}

function analyze() {
    var uploadFiles = el('file-input').files;
    if (uploadFiles.length != 1) alert('Моля, дай ми файл');

    el('analyze-button').innerHTML = 'Анализирам...';
    var xhr = new XMLHttpRequest();
    var loc = window.location
    xhr.open('POST', `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`, true);
    xhr.onerror = function() {alert (xhr.responseText);}
    xhr.onload = function(e) {
        if (this.readyState === 4) {
            var response = JSON.parse(e.target.responseText);
			var breed = breed_bg[response['result']];
            el('result-label').innerHTML = `Мисля, че това куче е `+breed+`.`;
			console.log(breed);
        }
        el('analyze-button').innerHTML = 'Давай';
    }

    var fileData = new FormData();
    fileData.append('file', uploadFiles[0]);
    xhr.send(fileData);
}

