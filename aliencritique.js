var story = "The discovery should be confirmed and monitored and any data bearing on the evidence of extraterrestrial intelligence should be recorded and stored permanently to the greatest extent feasible and practicable, in a form that will make it available for further analysis and interpretation. These recordings should be made available to the international institutions listed above and to members of the scientific community for further objective analysis and interpretation. 1.  Any individual, public or private research institution, or governmental agency that believes it has detected a signal from or other evidence of extraterrestrial intelligence (the discoverer) should seek to verify that the most plausible explanation for the evidence is the existence of extraterrestrial intelligence rather than some other natural phenomenon or anthropogenic phenomenon before making any public announcement. If the evidence cannot be confirmed as indicating the existence of extraterrestrial intelligence, the discoverer may disseminate the information as appropriate to the discovery of any unknown phenomenon. 2. Prior to making a public announcement that evidence of extraterrestrial intelligence has been detected, the discoverer should promptly inform all other observers or research organizations that are parties to this declaration, so that those other parties may seek to confirm the discovery by independent observations at other sites and so that a network can be established to enable continuous monitoring of the signal or phenomenon. Parties to this declaration should not make any public announcement of this information until it is determined whether this information is or is not credible evidence of the existence of extraterrestrial intelligence. The discoverer should inform his/her or its relevant national authorities."


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



var tale = "There is no widely agreed-upon definition of the term “intuitive design.” Rather, intuitive design is used informally to describe designs that are easy to use. So, when a user is able to understand and use a design immediately—that is, without consciously thinking about how to do it—we describe the design as intuitive. While there is no standard definition, some research groups have worked towards building a clearer understanding of the term “intuitive design.” Members of the interdisciplinary research group Intuitive Use of User Interfaces argue that intuition is not a feature of design—instead, intuitive use is a characteristic of the interaction process between a specific user and the design. So, if we are to evaluate whether a design is intuitive, we must also think about who will use the design. Users will feel that a design is intuitive when it is based on principles from other domains that are well known to them. Designs can therefore provide experiences that seem intuitive to some users but not to others. The aforementioned research group offers the following definition of intuitive use: “A technical system is—in a specific context of a user goal—intuitively usable to the degree the user is able to interact with it effectively by applying knowledge unconsciously.” Here is where the designer’s carefully derived knowledge of the target audience for an item comes into play. By capitalizing on what principles are likely to be present due to the target audience’s culture, industry background, etc., a designer can deliver a product or service that users can take to without having to hesitate and wonder how they can execute an action."

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


