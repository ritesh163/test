// (function ( $ ) {
// $.fn.alluraForm = function(arg){
// 	_this = this;
// 	 var url = "";
// 	return {
//     submit_click: function(data) {
//     	url = $(data).find('input[name=url]').val()
//     	form_id = $(data).find('input[name=form_id]').val()
// 		  var formdata = new FormData($(this)[0])
// 		  formdata.append('form_id', form_id)
// 		  $.each($('#input_preview input'),function(){
// 		    if(this.type == 'radio' || this.type == "checkbox"){
// 		      formdata.append("form["+this.id+"]", this.checked)
// 		    }else{
// 		      formdata.append("form["+this.id+"]", this.value)
// 		    }
// 		  })
// 			// var xhr = new XMLHttpRequest;
// 			// xhr.open('POST', url+".json", true);
// 			// xhr.send(formdata);

// 		  $.ajax({
// 		    url: url,
// 		    type: 'POST',
// 		    data: formdata,
// 		    processData: false,
// 		    contentType: false,
//         context: this,
// 		    complete: function(response) {
// 		      if(response.statusText == "OK"){alert('save Successfully')}else{alert("couldn't save")}
// 		    }
// 		  });
// 		  return false
//     },
//     init: function(){
// 			validation(this,arg)
// 			$.ajax({
// 			url: "http://localhost:3000/forms/"+arg["form"].toString()+"/embed_form",
// 			method: 'get',
// 			type: 'json',
// 			success: function(data) {
// 				url = data.url;
// 			  data = data;
// 				setData(data,arg["form"],_this)
// 			}
// 			});
// 			$(this).html()
			
//     }
//    }
// };
// function validation(that,arg){
// 	if (typeof arg['form'] == 'undefined' || arg['form'] <= 0){ 
// 		throw "Missing argument form please add form atttributes example {form: form_id}";
// 	}
// }

// function setData(data,form,ele){
//   var html_content = '<div><span><b>'+data.form.name+'</b></span></div><form class="col s12 white" id="" onsubmit="return $(this).alluraForm().submit_click(this)">'
//   html_content += '<input type="hidden" name="url" value="'+data.url+'" />'
//   html_content += '<input type="hidden" name="form_id" value="'+form+'" />'
//   html_content += '<div id="input_preview">'
//   $.each(data.properties,function(index, property){
//   	html_content += Formfield(index, property)
//   });
//   html_content += "<button id='submit_click' class='btn waves-effect waves-light' type='submit'  name='action'>"+data.form.submit_text+"</button>"
//   html_content += "</div></form>"
//   $(ele).html(html_content)
// }

// function Formfield(index,property)
// {
// 	var spantype="";
// 	var icon="";
// 	var inputtype="";
// 	var label="";
// 	var html_div ="";
// 	if (!property.hidden){
// 		switch (property.property_type) {
// 		 case 'text':
// 			spantype = "";
// 			icon = "<a href='#' title='"+property.help_text+"'><i id='"+property.id+"' class='material-icons' >info</i></a>"
// 			inputtype = "<input type='text' class='validate previewinput' id='"+property.id+"' name='"+property.id+"' placeholder='"+property.placeholder+"' value='"+property.default_value+"' required='"+property.required+"'/>"
// 			label = "<label for='text'>"+property.label+"</label>"
// 			break;
// 			case 'checkbox':
// 			spantype = ''
// 			inputtype = "<input type='checkbox' id='"+property.id+"'  name='"+property.id+"' class='filled-in validate previewinput' placeholder='"+property.placeholder+"' value='"+property.default_value+"' required='"+property.required+"'/>"
// 			label = "<label for='"+property.id+"'>"+property.label+"</label>"
// 			icon = ''
// 		  break;
// 			case 'email':
// 			spantype = ''
// 			icon = "<a href='#' title='"+property.help_text+"'><i id='"+property.id+"' class='material-icons' >info</i></a>"
// 			inputtype = "<input type='email' class='validate previewinput' name='"+property.id+"'  id='"+property.id+"' placeholder='"+property.placeholder+"' value='"+property.default_value+"' required='"+property.required+"' />"
// 			label = "<label for='email'>"+property.label+"</label>"
// 			break;

// 			case 'password':
// 			spantype = ''
// 			icon = "<a href='#' title='"+property.help_text+"'><i id='"+property.id+"' class='material-icons' >info</i></a>"
// 			inputtype = "<input type='password' class='validate previewinput' name='"+property.id+"' id='"+property.id+"' placeholder='"+property.placeholder+"' value='"+property.default_value+"' required='"+property.required+"' />"
// 			label = "<label for='password'>"+property.label+"</label>"
// 			icon = ''
// 			break;

// 			case 'radio':
// 			spantype = '<span class="span_'+property.name+'">'+property.name+'</span>' 
// 			inputtype = "<input type='radio' class='validate previewinput' data-label='"+property.label+"'  ref='"+property.id+"' name='"+property.name+"' id='"+property.id+"' />"
// 			label = "<label for='"+property.id+"'>"+property.label+"</label>"
// 			icon = ''
// 			break;
// 		default: 
// 		  inputtype = ""
// 		  label=''
// 		}}
// 		html_div = "<div class='row'><div class='input-field col s12'>"+spantype+inputtype+label+"</div>";

//     return html_div
// }

// // function check_label_exist(property){
// // return $(".span_"+property.name).length == 0 ? true : false
// // }
// }( jQuery ));
