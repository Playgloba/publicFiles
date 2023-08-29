var texts=new Array;texts.push("Venues"),texts.push("Programs"),texts.push("Coaches"),texts.push("Health Experts");var point=0;function changeText(){$(".prodtype").html(texts[point]),point<texts.length-1?point++:point=0,setTimeout(changeText,1e3)}function setSport(t){$('input[name="selectedsport"]').val(t)}
function searchSportFacilities() {
			var sport = $('input[name="selectedsport"]').val();
			var postalCode = $('input[name="postalCode"]').val();
			window.location.href = '/venues?searchTerm='
					+ sport
					+ '&postalCode='
					+ postalCode
					+ '&distance=100&filter=availableSports:' + sport;
		}
function getContextPath(){return window.location.pathname.substring(0,window.location.pathname.indexOf("/",2))}function facilitySearch(){$("form[id=facilitySearch]").submit(function(t){return!1});var t=getContextPath()+"/venues?searchTerm="+$("#searchTerm").val()+"&postalCode="+$("#postalCode").val()+"&distance="+$("#distance").val();window.location.href=t}function coachSearch(){$("#loader").removeClass("loaded"),$("form[id=facilitySearch]").submit(function(t){return!1});var t=getContextPath()+"/coaches?searchTerm="+$("#searchTerm").val()+"&postalCode="+$("#postalCode").val()+"&distance="+$("#distance").val();window.location.href=t}function healthexSearch(){$("#loader").removeClass("loaded"),$("form[id=facilitySearch]").submit(function(t){return!1});var t=getContextPath()+"/healthexperts?searchTerm="+$("#searchTerm").val()+"&postalCode="+$("#postalCode").val()+"&distance="+$("#distance").val();window.location.href=t}function programSearch(){$("form[id=facilitySearch]").submit(function(t){return!1});var t=getContextPath()+"/programs?searchTerm="+$("#searchTerm").val()+"&postalCode="+$("#postalCode").val()+"&distance="+$("#distance").val();window.location.href=t}changeText();