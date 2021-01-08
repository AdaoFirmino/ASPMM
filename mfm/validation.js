<!--
/* =================================================================== #
#
# Validation javascript Library
# Copyright 2002,2003  TM, Advantis Solutions 
#                (See below for full license)
# 
# VERSION: 1.0
# LAST UPDATE: 2002-10-04 TM
# CONTENT: javascript Validation functions
#
# =================================================================== */



	//---------------------------------------------------------------------------
	//  checkDateFormat
	//--------------------------------	
	// Parameters: 	a_campo		Campo do fomulario do qual deve ser validado o input
	//--------------------------------	
	// Description:	Validar campos no formato DATA (aaaa-mm-dd)
	//---------------------------------------------------------------------------
	function checkDateFormat( a_campo, a_msg ) {
	 var formato_data = /\d{4}-\d{1,2}-\d{1,2}/;
	
		if ( !a_campo.value.match(formato_data) && (a_campo.value!='')) {
			if (!a_msg)	{
				alert ('Erro: Data com formato incorrecto! (aaaa-mm-dd)');
				a_campo.value='';
			}
			return false;
		}
		else
			return true;
	} 

	//---------------------------------------------------------------------------
	//  checkHourFormat
	//--------------------------------	
	// Parameters: 	a_campo		Campo do fomulario do qual deve ser validado o input
	//--------------------------------	
	// Description:	Validar campos no formato HORA (hh:mm)
	//---------------------------------------------------------------------------
	function checkHourFormat( a_campo, a_msg ) {
	 var formato_hora = /\d{1,2}:\d{2}/;
	 
		if ( !a_campo.value.match(formato_hora) && (a_campo.value!='') ) {
			if (!a_msg)
				alert ('Erro: Hora com formato incorrecto! (hh:mm)');
			return false;
		}
	} 
	
	//---------------------------------------------------------------------------
	//  checkEmailFormat
	//--------------------------------	
	// Parameters: 	a_campo		Campo do fomulario do qual deve ser validado o input
	//--------------------------------	
	// Description:	Validar campos no formato E-MAIL (xxxx@xxx.xx)
	//---------------------------------------------------------------------------
	function checkEmailFormat( a_campo, a_msg ) {
//	 var formato_email = /\w+\@\w+\.\w{2,3}/;
	 var formato_email = /\w+\@(\w|\W)+\.\w+/;
	 
		if ( !a_campo.value.match(formato_email) && (a_campo.value!='') ) {
			if (!a_msg)
				alert ('Erro: E-mail com formato incorrecto! ');
			return false;
		}
		else
			return true;
	} 


	//---------------------------------------------------------------------------
	//  checkPercentagem
	//--------------------------------	
	// Parameters: 	a_campo		
	//--------------------------------	
	// Description:	
	//---------------------------------------------------------------------------
	function checkPercentagem(a_campo) {
	 	//alert('Entrei checkPercentagem');
	 
		if (a_campo.value < 0 || a_campo.value > 100) {
		  alert ('Erro: Introduza valores entre 0-100! ');
		  return false;
		}
		else {		  
		  return true;
		}
		
	} 



	//---------------------------------------------------------------------------
	//  checkHttpFormat
	//--------------------------------	
	// Parameters: 	a_campo		Campo do fomulario do qual deve ser validado o input
	//--------------------------------	
	// Description:	Validar campos no formato link HTTP (http://xxxx.xxx)
	//---------------------------------------------------------------------------
	function checkHttpFormat( a_campo, a_msg ) {
	 var formato_http = /http\:\/\/\w+\.\w+/;
	 
		if ( !a_campo.value.match(formato_http) && (a_campo.value!='') ) {
			if (!a_msg)
				alert ('Erro: Link HTTP com formato incorrecto! ');
			return false;
		}
		else
			return true;
	} 

	//---------------------------------------------------------------------------
	//  checkNum
	//--------------------------------	
	// Parameters: 	
	//--------------------------------	
	// Description:	verifica se o caracter introduzido é numerico,
	//						e se não for não imprime
	//---------------------------------------------------------------------------
	function checkNumdigit( ) {

		refcode = (window.event.keyCode);
		
		if (refcode == 48 || refcode == 49 || refcode == 50 || refcode == 51 || refcode == 52 || refcode == 53 || refcode == 54 || refcode == 55 || refcode == 56 || refcode == 57)
			return true;
		else 
			return false;
	}
	
		
	//---------------------------------------------------------------------------
	//  teste
	//--------------------------------	
	// Parameters: 	
	//--------------------------------	
	// Description:	Testar digitos inseridos num campo
	//---------------------------------------------------------------------------
	function teste() {
		refcode = (window.event.keyCode);
		alert(refcode);
	   return true;
	}

/*-------------------------------------------------------
Função:
Objectivo:
Criada: TM - 2001/10
-------------------------------------------------------*/
function valSelect(val, empty, name){

	var valor = new String(val.value);

	if ((empty == "0") && (valor.length == 0)) {
		alert(sREQ+name);
		return false;
	}
	if ((empty == "1") && (valor.length == 0)) {
		return true;
	}

	return true;
}


/*-------------------------------------------------------
Função:
Objectivo:
Criada: TM - 2001/10
-------------------------------------------------------*/
function valString(val, empty, name){

	var valor = new String(val.value);
	var formato_valido = /\W*/;

	if ((empty == "0") && (valor.length == 0)) {
		alert(sREQ+name);
		return false;
	}
	if ((empty == "1") && (valor.length == 0)) {
		return true;
	}

	if (valor.match(formato_valido)) {
		return true;
	}
	else {
		alert(sFOR+name);
		return false;
	}
}

/*-------------------------------------------------------
Função:
Objectivo:
Criada: TM - 2001/10
-------------------------------------------------------*/
function valDate(val, empty, name){

	var valor = new String(val.value);
	var formato_valido =  /^(\d{4})\-(\d{1,2})\-(\d{1,2})/i;

	if ((empty == "0") && (valor.length == 0)) {
		alert(sREQ+name);
		return false;
	}
	if ((empty == "1") && (valor.length == 0)) {
		return true;
	}

	if (valor.match(formato_valido)) {
		var teste_data = new Date(RegExp.$1,RegExp.$2-1,RegExp.$3);
	
		var yr;
		Today = new Date();
		yr = Number(Today.getFullYear());
	
		if ( Number(teste_data.getDate()) != RegExp.$3 || Number(teste_data.getMonth())+1 != RegExp.$2 || Number(teste_data.getFullYear()) != RegExp.$1 ) {
			alert(sFOR+name);
			return false;
		}
		return true;
	}
	else {
		alert(sFOR+name);
		return false;
	}
}
 
/*-------------------------------------------------------
Função:
Objectivo:
Criada: TM - 2001/10
-------------------------------------------------------*/
function valHour(val, empty, name){

	var valor = new String(val.value);
	var formato_valido = /\d{1,2}:\d{2}/;

	if ((empty == "0") && (valor.length == 0)) {
		alert(sREQ+name);
		return false;
	}
	if ((empty == "1") && (valor.length == 0)) {
		return true;
	}

	DataHora = a_campo.value.split(":");
	Hora_H = DataHora[0];
	Hora_M = DataHora[1];

	if ((valor.match(formato_valido)) &&  (Hora_H < 24) && (Hora_M < 60) ) {
		return true;
	}
	else {
		alert(sFOR+name);
		return false;
	}
}

/*-------------------------------------------------------
Função:
Objectivo:
Criada: TM - 2001/10
-------------------------------------------------------*/
function valEmail(val, empty, name){

	var valor = new String(val.value);
	var formato_valido = 	/\w+\@\w+\.\w{2,3}/;


	if ((empty == "0") && (valor.length == 0)) {
		alert(sREQ+name);
		return false;
	}
	if ((empty == "1") && (valor.length == 0)) {
		return true;
	}

	if (valor.match(formato_valido)) {
		return true;
	}
	else {
		alert(sFOR+name);
		return false;
	}
}

/*-------------------------------------------------------
Função:
Objectivo:
Criada: TM - 2001/10
-------------------------------------------------------*/
function valTel(val, empty, name){

	var valor = new String(val.value);
	var formato_valido = 	/^\d{9,12}$/;


	if ((empty == "0") && (valor.length == 0)) {
		alert(sREQ+name);
		return false;
	}
	if ((empty == "1") && (valor.length == 0)) {
		return true;
	}

	if (valor.match(formato_valido)) {
		return true;
	}
	else {
		alert(sFOR+name);
		return false;
	}
}


/*-------------------------------------------------------
Função:
Objectivo:
Criada: 
-------------------------------------------------------*/
function dosubmit(form, op){
	
	alert("dosubmit " + form.name);
	if (op) form.op.value = op;
	
	form.submit();
}



/*-------------------------------------------------------
Função:
Objectivo:
Criada: TM - 2002/10
-------------------------------------------------------*/
function valFile(val,empty,name) {

	var valor = new String(val.value);
//	var formato_valido = 	/^\d{9,12}$/;


	if ((empty == "0") && (valor.length == 0)) {
		alert(sREQ+name);
		return false;
	}
	if ((empty == "1") && (valor.length == 0)) {
		return true;
	}

}

/*
<readme>

	USAGE:

</readme>


<license>

	///// javascript Validation functions  /////
	Copyright (c) 2002,2003 TM, Advantis Solutions
	(http://www.advantis.pt) All rights reserved.
	
	Redistribution and use in source and binary forms, with or without 
	modification, are permitted provided that the following conditions 
	are met:
	1. Redistributions of source code must retain the above copyright 
	   notice, this list of conditions and the following disclaimer.
	2. Redistributions in binary form must reproduce the above 
	   copyright notice, this list of conditions and the following 
	   disclaimer in the documentation and/or other materials provided 
	   with the distribution.
	3. Neither the name of author nor the names of its contributors 
	   may be used to endorse or promote products derived from this 
	   software without specific prior written permission.

	DISCLAIMER:
	THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS "AS IS" 
	AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED 
	TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A 
	PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR 
	CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
	SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
	LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF 
	USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
	AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT 
	LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING 
	IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF 
	THE POSSIBILITY OF SUCH DAMAGE.

</license>
*/ 
--> 