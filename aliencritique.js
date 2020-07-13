var story = "Any individual, public or private research institution, or governmental agency that believes it has detected a signal from or other evidence of extraterrestrial intelligence (the discoverer) should seek to verify that the most plausible explanation for the evidence is the existence of extraterrestrial intelligence rather than some other natural phenomenon or anthropogenic phenomenon before making any public announcement. If the evidence cannot be confirmed as indicating the existence of extraterrestrial intelligence, the discoverer may disseminate the information as appropriate to the discovery of any unknown phenomenon.    Prior to making a public announcement that evidence of extraterrestrial intelligence has been detected, the discoverer should promptly inform all other observers or research organizations that are parties to this declaration, so that those other parties may seek to confirm the discovery by independent observations at other sites and so that a network can be established to enable continuous monitoring of the signal or phenomenon. Parties to this declaration should not make any public announcement of this information until it is determined whether this information is or is not credible evidence of the existence of extraterrestrial intelligence. The discoverer should inform his/her or its relevant national authorities.     After concluding that the discovery appears to be credible evidence of extraterrestrial intelligence, and after informing other parties to this declaration, the discoverer should inform observers throughout the world through the Central Bureau for Astronomical Telegrams of the International Astronomical Union, and should inform the Secretary General of the United Nations in accordance with Article XI of the Treaty on Principles Governing the Activities of States in the Exploration and Use of Outer Space, Including the Moon and Other Bodies. Because of their demonstrated interest in and expertise concerning the question of the existence of extraterrestrial intelligence, the discoverer should simultaneously inform the following international institutions of the discovery and should provide them with all pertinent data and recorded information concerning the evidence: the International Telecommunication Union, the Committee on Space Research, of the International Council of Scientific Unions, the International Astronautical Federation, the International Academy of Astronautics, the International Institute of Space Law, Commission 51 of the International Astronomical Union and Commission J of the International Radio Science Union.     A confirmed detection of extraterrestrial intelligence should be disseminated promptly, openly, and widely through scientific channels and public media, observing the procedures in this declaration. The discoverer should have the privilege of making the first public announcement.     All data necessary for confirmation of detection should be made available to the international scientific community through publications, meetings, conferences, and other appropriate means.    The discovery should be confirmed and monitored and any data bearing on the evidence of extraterrestrial intelligence should be recorded and stored permanently to the greatest extent feasible and practicable, in a form that will make it available for further analysis and interpretation. These recordings should be made available to the international institutions listed above and to members of the scientific community for further objective analysis and interpretation.   If the evidence of detection is in the form of electromagnetic signals, the parties to this declaration should seek international agreement to protect the appropriate frequencies by exercising procedures available through the International Telecommunication Union. Immediate notice should be sent to the Secretary General of the ITU in Geneva, who may include a request to minimize transmissions on the relevant frequencies in the Weekly Circular. The Secretariat, in conjunction with advice of the Union's Administrative Council, should explore the feasibility and utility of convening an Extraordinary Administrative Radio Conference to deal with the matter, subject to the opinions of the member Administrations of the ITU.    No response to a signal or other evidence of extraterrestrial intelligence should be sent until appropriate international consultations have taken place. The procedures for such consultations will be the subject of a separate agreement, declaration or arrangement.    The SETI Committee of the International Academy of Astronautics, in coordination with Commission 51 of the International Astronomical Union, will conduct a continuing review of procedures for the detection of extraterrestrial intelligence and the subsequent handling of the data. Should credible evidence of extraterrestrial intelligence be discovered, an international committee of scientists and other experts should be established to serve as a focal point for continuing analysis of all observational evidence collected in the aftermath of the discovery, and also to provide advice on the release of information to the public. This committee should be constituted from representatives of each of the international institutions listed above and such other members as the committee may deem necessary. To facilitate the convocation of such a committee at some unknown time in the future, the SETI Committee of the International Academy of Astronautics should initiate and maintain a current list of willing representatives from each of the international institutions listed above, as well as other individuals with relevant skills, and should make that list continuously available through the Secretariat of the International Academy of Astronautics. The International Academy of Astronautics will act as the Depository for this declaration and will annually provide a current list of parties to all the parties to this declaration."
// FUNCTIONS
function displayStory(storytext) {
  var poem = '';
  var array = storytext.split(' ');
  array.forEach(function(word){
    poem += "<span class>" + word + " </span>" 
  });
  $(".story").html(poem);
}


function newStory (){
  var storytext = $(".textarea").val()
  $('.story').html(displayStory(storytext));
  $(".textarea").val('');
  return false;
}

displayStory(story);



// Clicking on Words
$("div.story").on("click",function (evt){
  if (this === evt.target || $(evt.target).hasClass('faded') ){
  // do nothing
  } else {
      $(evt.target).removeClass("blocked")
      $(evt.target).toggleClass("marked")
  }
    updatePoem();
});



var tale = "Defining an intuitive interface is quite simple although creating one may not be. Here’s the definition: An intuitive interface is one that works the way the user expects it to. In other words, we find something intuitive when we don’t have to think about it. Thinking, as anyone studying for an exam can tell you, is hard. It takes energy and attention. And thinking about two things at once is particularly difficult. That’s why distracted driving is so dangerous. When someone is using software, they are usually thinking hard about the problem they’re solving. If they also must think about how to work the interface, they’ll have a tough time. Imagine trying to write an important letter while struggling to use the word processing software. It’s exhausting and is likely to result in a poorly-written letter. We call the mental effort needed to accomplish a task, cognitive load. Intuitive interfaces have low cognitive load. The lower the cognitive load, the more users can focus getting their task done. So, intuitive interfaces have a real advantage in terms of efficiency and the quality of the work. They also have the advantage of requiring less training and support; if an interface works the way users expect it to, they don’t need to learn how to use it.."

function displayTale(taletext) {
  var output = '';
  var array = taletext.split(' ');
  array.forEach(function(bit){
    output += "<span class>" + bit + " </span>" 
  });
  $(".tale").html(output);
}


function newTale (){
  var taletext = $(".textarea").val()
  $('.tale').html(displayTale(taletext));
  $(".textarea").val('');
  return false;
}

displayTale(tale);



// Clicking on Words
$("div.tale").on("click",function (evt){
  if (this === evt.target || $(evt.target).hasClass('faded') ){
  // do nothing
  } else {
      $(evt.target).removeClass("blocked")
      $(evt.target).toggleClass("markedtale")
     }
    updateOutput();
});


