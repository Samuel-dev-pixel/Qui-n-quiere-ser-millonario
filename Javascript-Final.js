function pregunta() {
var v_pregunta=document.getElementById("pregunta");
var n_pregunta=Math.round(Math.random()*(8-1)+parseInt(1));
var opcion_1=document.getElementById("opcion_1");
var opcion_2=document.getElementById("opcion_2");
var opcion_3=document.getElementById("opcion_3");
var opcion_4=document.getElementById("opcion_4");
var l_letra;
var w_letra;
var l_opcion;
var w_opcion;
if(n_pregunta==1){
	l_letra=(100*5.25)/31;
	w_letra=(99*23)/31;
	v_pregunta.value="Cuánto tiempo duro la Guerra de los cien años?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*6.3)/31;
    w_opcion=(99*6.8/31);
    opcion_1.value="A. 140 años";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. 116 años";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. 99 años";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. 100 años";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
} else {
	if(n_pregunta==2) {
	l_letra=(100*5.5)/31;
	w_letra=(99*22)/31;
	v_pregunta.value="En que país se invento el sombrero Panameño?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*7)/31;
    w_opcion=(99*6.5/31);
    opcion_1.value="A. Panamá";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. Ecuador";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. Brasil";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. Chile";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
	} else {
		if (n_pregunta==3) {
    l_letra=(100*6.75)/31;
	w_letra=(99*20)/31;
	v_pregunta.value="En que mes fue la Revolución de Octubre?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*4.7)/31;
    w_opcion=(99*8.5/31);
    opcion_1.value="A. Noviembre";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. Octubre";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. Enero";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. Septiembre";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
		} else {
			if (n_pregunta==4) {
	l_letra=(100*6.5)/31;
	w_letra=(99*19.5)/31;
	v_pregunta.value="Cuál era el nombre del Rey Jorge VI?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*7)/31;
    w_opcion=(99*6.3/31);
    opcion_1.value="A. Alberto";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. Jorge";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. Simón";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. Enrique";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
			} else {
				if (n_pregunta==5) {
	l_letra=(100*2)/31;
	w_letra=(99*29)/31;
	v_pregunta.value="A nombre de qué animal reciben su nombre  las Islas Canarias?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*7)/31;
    w_opcion=(99*6.6/31);
    opcion_1.value="A. Canguro";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. Perro";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. Canario";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. Pavo";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
				} else {
					if (n_pregunta==6) {
	l_letra=(100*9.25)/31;
	w_letra=(99*12.5)/31;
	v_pregunta.value="Quién escribió La Odisea?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*6.3)/31;
    w_opcion=(99*7.2/31);
    opcion_1.value="A. Hesíodo";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. Eurípides";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. Sófocles";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. Homero";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
					} else {
						if (n_pregunta==7) {
	l_letra=(100*8)/31;
	w_letra=(99*17.5)/31;
	v_pregunta.value="Cuál es el río más largo del mundo?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*6.7)/31;
    w_opcion=(99*7.65/31);
    opcion_1.value="A. Nilo";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. Misisipi";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. Amazonas";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. Orinoco";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
						} else {
							if (n_pregunta==8) {
	l_letra=(100*4.75)/31;
	w_letra=(99*23.5)/31;
	v_pregunta.value="Qué cantidad de huesos hay en el cuerpo humano?";
	v_pregunta.style.left=l_letra+"%";
    v_pregunta.style.width=w_letra+"%";
    l_opcion=(100*8.3)/31;
    w_opcion=(99*3.5/31);
    opcion_1.value="A. 213";
    opcion_1.style.left=l_opcion+"%";
    opcion_1.style.width=w_opcion+"%";
    opcion_2.value="B. 206";
    opcion_2.style.left=l_opcion+"%";
    opcion_2.style.width=w_opcion+"%";
    opcion_3.value="C. 300";
    opcion_3.style.right=l_opcion+"%";
    opcion_3.style.width=w_opcion+"%";
    opcion_4.value="D. 273";
    opcion_4.style.right=l_opcion+"%";
    opcion_4.style.width=w_opcion+"%";
							}
						}
					}
				}
			}
		}
	}
}
}
function comprobar() {
	var enviar=document.getElementById("enviar");
	var respuesta=document.getElementById("respuesta");
	var n__pregunta;
	var nn;
	var cerouno=document.getElementById("cerouno");
    var v__pregunta=document.getElementById("pregunta");
    var opcion__1=document.getElementById("opcion_1");
    var opcion__2=document.getElementById("opcion_2");
    var opcion__3=document.getElementById("opcion_3");
    var opcion__4=document.getElementById("opcion_4");
	var puntaje_=document.getElementById("puntaje");
    var errores_=document.getElementById("errores");
    var reintentar=document.getElementById("reintentar");
    var l__letra;
    var w__letra;
    var l__opcion;
    var w__opcion;
    var a=document.getElementById("a");
    var b=document.getElementById("b");
    var c=document.getElementById("c");
    var d=document.getElementById("d");
    var e=document.getElementById("e");
    var f=document.getElementById("f");
    var g=document.getElementById("g");
    var h=document.getElementById("h");
    if (cerouno.value==0) {a.value=0;b.value=0;c.value=0;d.value=0;e.value=0;f.value=0;g.value=0;h.value=0;cerouno.value=1}
    var n__pregunta21;
    var n__pregunta22;
    var elec2;
    var con2;
    con2=1;
    var n__pregunta31;
    var n__pregunta32;
    var elec3;
    var con3;
    con3=1;
    var n__pregunta41;
    var n__pregunta42;
    var elec4;
    var con4;
    con4=1;
    var n__pregunta51;
    var n__pregunta52;
    var elec5;
    var con5;
    con5=0;
    var n__pregunta61;
    var n__pregunta62;
    var elec6;
    var con6;
    con6=0;
    var n__pregunta71;
    var n__pregunta72;
    var elec7;
    var con7;
    con7=0;
    if (v__pregunta.value=="Cuánto tiempo duro la Guerra de los cien años?") {
    	n__pregunta=1;
    } else {
    	if (v__pregunta.value=="En que país se invento el sombrero Panameño?") {
    		n__pregunta=2;
    	} else {
    		if (v__pregunta.value=="En que mes fue la Revolución de Octubre?") {
    			n__pregunta=3;
    		} else {
    			if (v__pregunta.value=="Cuál era el nombre del Rey Jorge VI?") {
    				n__pregunta=4;
    			} else {
    				if (v__pregunta.value=="A nombre de qué animal reciben su nombre  las Islas Canarias?") {
    					n__pregunta=5;
    				} else {
    					if (v__pregunta.value=="Quién escribió La Odisea?") {
    						n__pregunta=6;
    					} else {
    						if (v__pregunta.value=="Cuál es el río más largo del mundo?") {
    							n__pregunta=7;
    						} else {
    							if (v__pregunta.value=="Qué cantidad de huesos hay en el cuerpo humano?") {
    								n__pregunta=8;
    							}
    						}
    					}
    				}
    			}
    		}
    	}
    }
	if (n__pregunta==1&&a.value==0) {
    l__letra=(100*5.25)/31;
	w__letra=(99*23)/31;
	v__pregunta.value="Cuánto tiempo duro la Guerra de los cien años?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*6.3)/31;
    w__opcion=(99*6.8/31);
    opcion__1.value="A. 140 años";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. 116 años";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. 99 años";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. 100 años";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="B") {
		if (puntaje_.value==0) {
		if (a.value==0) {
	       		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (a.value==0) {
	       		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (a.value==0) {
	       		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (a.value==0) {
	       		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (a.value==0) {
	       		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (a.value==0) {
	       		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (a.value==0) {
	       		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (a.value==0) {
	       		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	a.value=1;
	n__pregunta=0;
    }
    if (n__pregunta==2&&b.value==0) {
    l__letra=(100*5.5)/31;
	w__letra=(99*22)/31;
	v__pregunta.value="En que país se invento el sombrero Panameño?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*7)/31;
    w__opcion=(99*6.5/31);
    opcion__1.value="A. Panamá";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. Ecuador";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. Brasil";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. Chile";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="B") {
		if (puntaje_.value==0) {
			if (b.value==0) {
		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (b.value==0) {
		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (b.value==0) {
		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (b.value==0) {
		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (b.value==0) {
		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (b.value==0) {
		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (b.value==0) {
		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (b.value==0) {
		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	b.value=1;
	n__pregunta=1;
    }
    if (n__pregunta==3&&c.value==0) {
    l__letra=(100*6.75)/31;
	w__letra=(99*20)/31;
	v__pregunta.value="En que mes fue la Revolución de Octubre?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*4.7)/31;
    w__opcion=(99*8.5/31);
    opcion__1.value="A. Noviembre";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. Octubre";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. Enero";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. Septiembre";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="A") {
		if (puntaje_.value==0) {
		if (c.value==0) {
		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (c.value==0) {
		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (c.value==0) {
		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (c.value==0) {
		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (c.value==0) {
		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (c.value==0) {
		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (c.value==0) {
		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (c.value==0) {
		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	c.value=1;
	n__pregunta=Math.round(Math.random()*(2-1)+parseInt(1));
    }
    if (n__pregunta==4&&d.value==0) {
    l__letra=(100*6.5)/31;
	w__letra=(99*19.5)/31;
	v__pregunta.value="Cuál era el nombre del Rey Jorge VI?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*7)/31;
    w__opcion=(99*6.3/31);
    opcion__1.value="A. Alberto";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. Jorge";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. Simón";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. Enrique";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="A") {
		if (puntaje_.value==0) {
		if (d.value==0) {
		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (d.value==0) {
		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (d.value==0) {
		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (d.value==0) {
		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (d.value==0) {
		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (d.value==0) {
		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (d.value==0) {
		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (d.value==0) {
		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	d.value=4;
	n__pregunta=Math.round(Math.random()*(3-1)+parseInt(1));
    }
    if (n__pregunta==5&&e.value==0) {
    l__letra=(100*2)/31;
	w__letra=(99*29)/31;
	v__pregunta.value="A nombre de qué animal reciben su nombre  las Islas Canarias?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*7)/31;
    w__opcion=(99*6.6/31);
    opcion__1.value="A. Canguro";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. Perro";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. Canario";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. Pavo";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="B") {
		if (puntaje_.value==0) {
		if (e.value==0) {
		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (e.value==0) {
		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (e.value==0) {
		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (e.value==0) {
		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (e.value==0) {
		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (e.value==0) {
		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (e.value==0) {
		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (e.value==0) {
		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	e.value=5;
	n__pregunta=Math.round(Math.random()*(4-1)+parseInt(1));
    }
    if (n__pregunta==6&&f.value==0) {
    l__letra=(100*9.25)/31;
	w__letra=(99*12.5)/31;
	v__pregunta.value="Quién escribió La Odisea?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*6.3)/31;
    w__opcion=(99*7.2/31);
    opcion__1.value="A. Hesíodo";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. Eurípides";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. Sófocles";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. Homero";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="D") {
		if (puntaje_.value==0) {
		if (f.value==0) {
		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (f.value==0) {
		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (f.value==0) {
		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (f.value==0) {
		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (f.value==0) {
		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (f.value==0) {
		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (f.value==0) {
		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (f.value==0) {
		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	f.value=1;
	n__pregunta=Math.round(Math.random()*(5-1)+parseInt(1));
    }
    if (n__pregunta==7&&g.value==0) {
    l__letra=(100*8)/31;
	w__letra=(99*17.5)/31;
	v__pregunta.value="Cuál es el río más largo del mundo?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*6.7)/31;
    w__opcion=(99*7.65/31);
    opcion__1.value="A. Nilo";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. Misisipi";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. Amazonas";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. Orinoco";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="C") {
		if (puntaje_.value==0) {
		if (g.value==0) {
		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (g.value==0) {
		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (g.value==0) {
		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (g.value==0) {
		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (g.value==0) {
		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (g.value==0) {
		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (g.value==0) {
		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (g.value==0) {
		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	g.value=1;
	n__pregunta=Math.round(Math.random()*(6-1)+parseInt(1));
    }
    if (n__pregunta==8&&h.value==0) {
    l__letra=(100*4.75)/31;
	w__letra=(99*23.5)/31;
	v__pregunta.value="Qué cantidad de huesos hay en el cuerpo humano?";
	v__pregunta.style.left=l__letra+"%";
    v__pregunta.style.width=w__letra+"%";
    l__opcion=(100*8.3)/31;
    w__opcion=(99*3.5/31);
    opcion__1.value="A. 213";
    opcion__1.style.left=l__opcion+"%";
    opcion__1.style.width=w__opcion+"%";
    opcion__2.value="B. 206";
    opcion__2.style.left=l__opcion+"%";
    opcion__2.style.width=w__opcion+"%";
    opcion__3.value="C. 300";
    opcion__3.style.right=l__opcion+"%";
    opcion__3.style.width=w__opcion+"%";
    opcion__4.value="D. 273";
    opcion__4.style.right=l__opcion+"%";
    opcion__4.style.width=w__opcion+"%";
		if (respuesta.value=="B") {
		if (puntaje_.value==0) {
		if (h.value==0) {
		puntaje_.value=200;} else {puntaje_.value=0;}
	       } else {
	       	if (puntaje_.value==200) {
	       		if (h.value==0) {
		puntaje_.value=400;} else {puntaje_.value=200;}
	       	} else {
	       		if (puntaje_.value==400) {
	       			if (h.value==0) {
		puntaje_.value=600;} else {puntaje_.value=400;}
	       		} else {
	       			if (puntaje.value==600) {
	       				if (h.value==0) {
		puntaje_.value=800;} else {puntaje_.value=600;}
	       			} else {
	       				if (puntaje_.value==800) {
	       					if (h.value==0) {
		puntaje_.value=1000;} else {puntaje_.value=800;}
	       				} else {
	       					if (puntaje_.value==1000) {
	       						if (h.value==0) {
		puntaje_.value=1200;} else {puntaje_.value=1000;}
	       					} else {
	       						if (puntaje_.value==1200) {
	       							if (h.value==0) {
		puntaje_.value=1400;} else {puntaje_.value=1200;}
	       						} else {
	       							if (puntaje_.value==1400) {
	       								if (h.value==0) {
		puntaje_.value=1600;} else {puntaje_.value=1400;}
	       							}
	       						}
	       					}
	       				}
	       			}
	       		}
	       	}
	       }
	       }
	 else {
		if (errores_.value==0) {
		errores_.value=1;
	    } else {
	    	if (errores_.value==1) {
	    		errores_.value=2;
	    	} else {
	    		if (errores_.value==2) {
	    			errores_.value=3;
	    		}
	    	}
	    }
	}
	h.value=0;
	n__pregunta=Math.round(Math.random()*(7-1)+parseInt(1));
    }
    if (a.value==1) {n__pregunta=Math.round(Math.random()*(8-2)+parseInt(2));}
    if (a.value==1&&n__pregunta==8) { if (h.value=0) {
    	if (g.value==1) {
                  if (f.value==1){


                   	if (e.value==1) {

                     
                     if (d.value==1) {


                      if (c.value==1) {


                       if (b.value==1) {

                       n__pregunta.value=8;

                       }  else {
                       	n__pregunta.value=2;
                       }

                      } else {

                      	if (b.value==1) {
                            n__pregunta.value=3;
                      	} else {n__pregunta=Math.round(Math.random()*(3-2)+parseInt(2));}
                      }

                     } else {
                     	if (c.value==1) {
                     		n__pregunta.value=4;
                     	} else {
                     		if (b.value==1) {n__pregunta=3;} else {n__pregunta=Math.round(Math.random()*(3-2)+parseInt(2));}
                     	}
                     }

                   	} else {
                   		if (d.value==1) {
                   			n__pregunta.value=5;
                            } else {
                   			if (c.value==1) {
                   				n__pregunta=Math.round(Math.random()*(5-4)+parseInt(4));
                   			} else {
                   				if (b.value==1) {
                                    {n__pregunta=Math.round(Math.random()*(5-3)+parseInt(3));}
                                    else {n__pregunta=Math.round(Math.random()*(5-2)+parseInt(2));}
                             }     
                         }
                   	}
                   } else {
                  	if (e.value==1) {
                  		if (d.value==1) {
                  			if (c.value==1) {
                  				if (b.value==1) {n__pregunta=6} else {n__pregunta=2;}
                  			} else {n__pregunta=Math.round(Math.random()*(3-2)+parseInt(2));}
                  		} {n__pregunta=6} else {n__pregunta=Math.round(Math.random()*(4-2)+parseInt(2));}
                  	} {n__pregunta=Math.round(Math.random()*(6-5)+parseInt(5));} else {n__pregunta=6;}
                  		if (d.value==1) {
                  			if (c.value==1) {
                  				if (b.value==1) {
                                    n__pregunta=Math.round(Math.random()*(6-5)+parseInt(2));
                  				} else 
                  			}
                  		} else {
                  			if (c.value==1) {
                  				if (b.value==1) {
                                  n__pregunta=Math.round(Math.random()*(7-3)+parseInt(3));
                  				} else {n__pregunta=Math.round(Math.random()*(7-2)+parseInt(2));}
                  			} else {
                  				if (b.value==1) {n__pregunta=Math.round(Math.random()*(7-4)+parseInt(4));} else {n__pregunta=8;}
                  			}
                  		}
                  	}
                  } else {
                  	if (f.value==1) {

                     if (e.value==1) {

                      if (d.value==1) {

                       if (c.value==1) {
                            
                       	if (b.value==1) {
                                  n__pregunta=8;
                       	} else {n__pregunta=Math.round(Math.random()*(7-3)+parseInt(3));}
                      } else {n__pregunta=Math.round(Math.random()*(7-4)+parseInt(4));} 
                     } else {n__pregunta=Math.round(Math.random()*(7-5)+parseInt(5));} 
                  	} else {{n__pregunta=Math.round(Math.random()*(7-6)+parseInt(6));} 
                  } else {n__pregunta=Math.round(Math.random()*(6-2)+parseInt(2));} 
    	} else {
    		if (f.value==1) {
                     if (e.value==1) {

                     
                     if (d.value==1) {


                      if (c.value==1) {


                       if (b.value==1) {

                       n__pregunta.value=8;

                       }  else {
                       	n__pregunta.value=2;
                       }

                      } else {

                      	if (b.value==1) {
                            n__pregunta.value=3;
                      	} else {n__pregunta=Math.round(Math.random()*(3-2)+parseInt(2));}
                      }

                     } else {
                     	if (c.value==1) {
                     		n__pregunta.value=4;
                     	} else {
                     		if (b.value==1) {n__pregunta=3;} else {n__pregunta=Math.round(Math.random()*(3-2)+parseInt(2));}
                     	}
                     }

                   	} else {
                   		if (d.value==1) {
                   			n__pregunta.value=5;
                            } else {
                   			if (c.value==1) {
                   				n__pregunta=Math.round(Math.random()*(5-4)+parseInt(4));
                   			} else {
                   				if (b.value==1) {
                                    {n__pregunta=Math.round(Math.random()*(5-3)+parseInt(3));}
                                    else {n__pregunta=Math.round(Math.random()*(5-2)+parseInt(2));}
                             }     
                         }
                   	}
                   } else {
                  	if (e.value==1) {
                  		if (d.value==1) {
                  			if (c.value==1) {
                  				if (b.value==1) {n__pregunta=6} else {n__pregunta=2;}
                  			} else {n__pregunta=Math.round(Math.random()*(3-2)+parseInt(2));}
                  		} {n__pregunta=6} else {n__pregunta=Math.round(Math.random()*(4-2)+parseInt(2));}
                  	} {n__pregunta=Math.round(Math.random()*(6-5)+parseInt(5));} else {n__pregunta=6;}
                  		if (d.value==1) {
                  			if (c.value==1) {
                  				if (b.value==1) {
                                    n__pregunta=Math.round(Math.random()*(6-5)+parseInt(2));
                  				} else 
                  			}
                  		} else {
                  			if (c.value==1) {
                  				if (b.value==1) {
                                  n__pregunta=Math.round(Math.random()*(7-3)+parseInt(3));
                  				} else {n__pregunta=Math.round(Math.random()*(7-2)+parseInt(2));}
                  			} else {
                  				if (b.value==1) {n__pregunta=Math.round(Math.random()*(7-4)+parseInt(4));} else {n__pregunta=8;}
                  			}
                  		}
                  	}
                  } else {
                  	if (f.value==1) {

                     if (e.value==1) {

                      if (d.value==1) {

                       if (c.value==1) {
                            
                       	if (b.value==1) {
                                  n__pregunta=8;
                       	} else {n__pregunta=Math.round(Math.random()*(7-3)+parseInt(3));}
                      } else {n__pregunta=Math.round(Math.random()*(7-4)+parseInt(4));} 
                     } else {n__pregunta=Math.round(Math.random()*(7-5)+parseInt(5));} 
                  	} else {{n__pregunta=Math.round(Math.random()*(7-6)+parseInt(6));} 
                  } else {n__pregunta=Math.round(Math.random()*(6-2)+parseInt(2));} 
    		} else {
    			if (e.value==1) {

    			} else {
    				if (d.value==1) {

    				} else {
    					if (c.value==1) {

    					} else {
    						if (b.value==1) {}
    					}
    				}
    			}
    		}
    	}
    } else {n__pregunta=Math.round(Math.random()*(7-2)+parseInt(2));}} } else {
    	if (a.value==1&&n__pregunta==7) {

    	} else {
    		if (a.value==1&&n__pregunta==6) {

    		} else {
    			if (a.value==1&&n__pregunta==5) {

    			} else {
    				if (a.value==1&&n__pregunta==4) {

    				} else {
    					if (a.value==1&&n__pregunta==3) {

    					} else {
    						if (a.value&&n__pregunta==2) {

    						}
    					}
    				}
    			}
    		}
    	}
    }
	if (errores_.value==3) {
		opcion__1.value="";
		opcion__2.value="";
		opcion__3.value="";
		opcion__4.value="";
		opcion__1.style.opacity=0+"%";
        opcion__2.style.opacity=0+"%";
        opcion__3.style.opacity=0+"%";
        opcion__4.style.opacity=0+"%";
        respuesta.style.opacity=0+"%";
        respuesta.value="";
        enviar.style.opacity=0+"%";
        v__pregunta.value="Fin del juego";
        reintentar.style.opacity=100+"%";
	}

}