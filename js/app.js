
	/******************************
	    Populate Initial Content
	 ******************************/

	function renderSections(){
		var acc = _.reduce(sections, function(memo, section){
			return memo + '<td><div class="post">' + renderSentences(section) + "</div></td>";
		}, 0);

		$("#posts").html(acc);
	}

	function renderSentences(section){
		var acc = "";

		_.each(idList(section.id, section.sentences), function(id){
			var sentence = _.findWhere(sentences, {id : id});

			var rating = (sentence.rating) ? " r" + sentence.rating : "";
			rating = 'highlight' + rating;

			// Start <span> tag if we have a link
			acc +=  (sentence.link) ? '<span onclick="javascript:modal(\'' + sentence.link + '\')" class="' + rating + '">' : '<span>'

			// add content and close <span> tag.
			acc +=  sentence.sentence + "</span> ";			

		})

		return "<p>" + acc + "</p>";;
	}

	function idList(prefix, count){
		var ids = [];

		for (var i = 1; i <= count; i++) {

			// Generate zeros
			var zeros = null;

			if (i < 10) zeros = "00";
			if (i >= 10) zeros = "0"

			ids.push(prefix + zeros + i);
		};

		return ids;
	}

	/******************************
	       Load Sub-Sections
	 ******************************/

    function modal(id){

    	var url = "content/links/" + id;

        xhr_GET(url, function(content){

            // Callback: populate & fade in modal
            $("#modal .content").html(content);
            $("#modal").fadeIn();
        })
    }

    function hideModal(){
        $("#modal").fadeOut();
    }

    function xhr_GET(url, next){
        var xhr= new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onreadystatechange= function() {
            if (this.readyState!==4) return;
            if (this.status!==200) return; // or whatever error handling you want

            next(this.responseText);
        };

        xhr.send();
    }
