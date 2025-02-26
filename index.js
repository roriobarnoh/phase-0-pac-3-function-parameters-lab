function introduction(name){
    return `Hi, my name is ${name}.`
}
introduction("Aki");
introduction("Samip");

function introductionWithLanguage(name, language){
    return "Hi, my name is " + name + " and I am learning to program in " +  language + "."
}
introduction("Aki", "Ember.j");
introduction("Samip", "React");

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return "Hi, my name is " + name + " and I am learning to program in " + language + "."

}
introduction("Gracie", "Python");
