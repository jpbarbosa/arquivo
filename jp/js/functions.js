function jobStart(id,title,link){document.write('<TR><TD HEIGHT=25></TD><TD COLSPAN=4></TD></TR><TR><TD WIDTH=25></TD><TD COLSPAN=4><IMG SRC="images/null.gif" WIDTH=30 HEIGHT=10><IMG SRC="images/box-lt.gif" WIDTH=10 HEIGHT=10><IMG SRC="images/box-t.gif" WIDTH=220 HEIGHT=10><IMG SRC="images/box-rt.gif" WIDTH=10 HEIGHT=10><BR><IMG SRC="images/box-ld.gif" WIDTH=40 HEIGHT=20><IMG SRC="images/'+id+'-1.gif" WIDTH=220 HEIGHT=20><IMG SRC="images/box-rd.gif" WIDTH=20 HEIGHT=20><IMG SRC="images/box-t.gif" WIDTH=250 HEIGHT=10><IMG SRC="images/box-rt.gif" WIDTH=10 HEIGHT=10></TD></TR><TR><TD WIDTH=25></TD><TD WIDTH=250><IMG SRC="images/box-l.gif" WIDTH=10 HEIGHT=180><A HREF="'+link+'"'+((link.indexOf('javascript')==-1)?' TARGET="_blank"' : '')+'><IMG SRC="images/'+id+'-0.jpg" WIDTH=240 HEIGHT=180 BORDER=0></A><BR><IMG SRC="images/box-l.gif" WIDTH=10 HEIGHT=10><IMG SRC="images/box-fundo.gif" WIDTH=10 HEIGHT=10><IMG SRC="images/sombra.gif" WIDTH=230 HEIGHT=10></TD><TD WIDTH=20><IMG SRC="images/box-fundo.gif" WIDTH=20 HEIGHT=10><BR><IMG SRC="images/sombra.gif" WIDTH=10 HEIGHT=180><IMG SRC="images/box-fundo.gif" WIDTH=10 HEIGHT=180></TD><TD WIDTH=260 VALIGN="BOTTOM" BGCOLOR="#E6E6E6"><span style="COLOR:#333333">')}
function jobEnd(){document.write('</span></TD><TD WIDTH=10><IMG SRC="images/box-r.gif" WIDTH=10 HEIGHT=130><BR><IMG SRC="images/box-r.gif" WIDTH=10 HEIGHT=60><BR></TD></TR><TR><TD WIDTH=25></TD><TD COLSPAN=4><IMG SRC="images/box-lb.gif" WIDTH=10 HEIGHT=10><IMG SRC="images/box-b.gif" WIDTH=520 HEIGHT=10><IMG SRC="images/box-rb.gif" WIDTH=10 HEIGHT=10><BR></TD></TR>')}

var paginas=6

function paginador(pagina){
	S='<tr><td height=25></td><td colspan=4></td></tr><tr><td height=25></td><td colspan=4><table width=100% border=0 cellspacing=0 cellpadding=0><tr>'+
	'<td width=20%>'+((pagina!=1)?'<a href="item-1-portfolio_'+(pagina-1)+'.htm">&lt;- Anterior</a>':'')+'</td>'+
	'<td width=60% align="center">Página '+pagina+' de '+paginas+'</td>'+
	'<td width=20% align="right">'+((pagina!=paginas)?'<a href="item-1-portfolio_'+(pagina+1)+'.htm">Próxima -&gt;</a>':'')+'</td>'+
	'</tr></table></td></tr><tr><td height=25></td><td colspan4></td></tr>'
	document.write(S)
}

function openPopupVideo(video,site){
	site=site||'default'
	w=(site=='bandnews')?444:780
	h=(site=='bandnews')?407:314
	popupVideo=window.open('http://www.agenciaclick.com.br/superig/player_full/video.asp?video='+video+'&site='+site,'superig_popup_video','width='+w+',height='+h+',scrollbars=0,fullscreen=1')
}
