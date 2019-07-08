	var rowID = 0;
	var usrDB = new Array();
	var emDB = new Array();
	var cUser, cEmail="false";
	
async function fetchUsers(url) {
		var response = await fetch(url);
		var json = await response.json();
		var listOfnames = json.map(user => user.name);
		var listOfemails = json.map(user => user.email);
	  
		for(i=0;i<listOfnames.length;i++)
		{
		  usrDB.push(listOfnames[i]);
		}
		
		for(i=0;i<listOfemails.length;i++)
		{
		  emDB.push(listOfemails[i]);
		}
		
		for(i=0;i<10;i++)
		{
		  drawRows();	
		}
	} 
fetchUsers('https://jsonplaceholder.typicode.com/users');
  
  function validateForm()	{
		var infoPanelRight = document.getElementById("infoPanelRight");
		var usr = document.getElementById("user").value;
		var em = document.getElementById("email").value;
			usrPattern = /^[a-zA-Z\s]+$/;
		 emPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if(usrPattern.test(usr)){
			if(emPattern.test(em)){
				for(i=0; i<emDB.length;i++)
				{
					if(emDB[i]==em){
						infoPanelRight.innerHTML = '<p>This email already exists.</p>';
						return false;
					}
				}
				if(emDB[i]!=em){
						newUser();
					}
			}
			else{
				infoPanelRight.innerHTML = '<p>Incorrect email format.</p>';
			}
		}	
	else
		{	
			infoPanelRight.innerHTML = '<p>Name must contain letters only.</p>';			
		}
	}
  
	function showForm()
	{
		var submitPanelLeft = document.getElementById("submitPanelLeft");
		var rowsLength = document.getElementById("usrTable").rows.length; 
		if(rowsLength>=11)
		{
			document.getElementById("plus").setAttribute("src","ico/p_green.png");
			document.getElementById("addUserButton").setAttribute("disabled", "disabled");
			infoPanelRight.innerHTML = '<p><img src="ico/error.png">&nbsp&nbspYou can not add new user because of a limit</p>';
		}else{
			submitPanelLeft.innerHTML = '<input onkeypress="clearInputs()" type="text" name="user" id="user" class="input-usr"  maxlength="20" placeholder="Name.." autofocus required><input onkeypress="clearInputs()" type="text" name="email" id="email" class="input-em" placeholder="Email.." required><input id="submitButton" class="button-submit" type="submit" value="Submit" onclick="validateForm()">';
			user.focus();
			}
	}
	
	function clearSubmit()
	{
		var submitPanelLeft = document.getElementById("submitPanelLeft");
			resetButton = document.getElementById("resetButton");
			
		document.getElementById("user").value = "";
		document.getElementById("email").value = "";
		submitPanelLeft.removeChild(resetButton);
	}
	
	function drawRows()
	{
		var usrTable = document.getElementById("usrTable");
		
			var tr = document.createElement("tr");
				tr.setAttribute("id","row"+rowID);
				
			var td1 = document.createElement("td");
				td1.setAttribute("class","first-column");	
				
			var td2	= document.createElement("td"); 
				td2.setAttribute("class","second-column");
				
			var td3 = document.createElement("td"); 
				td3.setAttribute("class","third-column");
				
			var td4 = document.createElement("td"); 
				td4.setAttribute("class","forth-column");
			
			var btnX = document.createElement("input"); 
				btnX.setAttribute("type","button");
				btnX.setAttribute("class","X");
				btnX.setAttribute("value"," X ");
				btnX.setAttribute("id",rowID);
				btnX.setAttribute("onclick","removeRow(this)");
				
			var spanBlock = document.createElement("span"); 
				spanBlock.setAttribute("class","spanBlock");
			
			
			tr.appendChild(td1); 
			tr.appendChild(td2); 
			tr.appendChild(td3); 
			tr.appendChild(td4); 
			
			
			td1.appendChild(spanBlock); 		
			spanBlock.appendChild(document.createTextNode("\u00A0"+rowID+"\u00A0")); 			
			td2.appendChild(document.createTextNode(usrDB[rowID]));  
			td3.appendChild(document.createTextNode(emDB[rowID]));  
			td4.appendChild(btnX); 
			usrTable.appendChild(tr);
			
			if(rowID%2){
				tr.style.backgroundColor = "#FBFCFC";
			}
			rowID++;	
	}
	
	function newUser()
	{
		var usr = document.getElementById("user").value;
		var em = document.getElementById("email").value;
		
		var usrTable = document.getElementById("usrTable");
		var infoPanelRight = document.getElementById("infoPanelRight");
			
		var rowsLength = document.getElementById("usrTable").rows.length; 
		
		
		if(rowsLength==11)
		{
			document.getElementById("plus").setAttribute("src", "ico/p_green.png");
			document.getElementById("addUserButton").setAttribute("disabled", "disabled");
			infoPanelRight.innerHTML = '<p><img src="ico/error.png">&nbsp&nbspYou can not add new user because of a limit</p>';
		} 
			else 
		{
			submitPanelLeft.innerHTML ='<button id="addUserButton" class="button-submit" onclick="showForm()"><img id="plus" src="ico/p_white.png">&nbsp Add User</button>';		
			usrDB.push(usr);
			emDB.push(em);
				
			var tr = document.createElement("tr");
				tr.setAttribute("id","row"+rowID);
				
			var td1 = document.createElement("td");
				td1.setAttribute("class","first-column");	
				
			var td2	= document.createElement("td"); 
				td2.setAttribute("class","second-column");
				
			var td3 = document.createElement("td"); 
				td3.setAttribute("class","third-column");
				
			var td4 = document.createElement("td"); 
				td4.setAttribute("class","forth-column");
			
			var btnX = document.createElement("input"); 
				btnX.setAttribute("type","button");
				btnX.setAttribute("class","X");
				btnX.setAttribute("value"," X ");
				btnX.setAttribute("id",rowID);
				btnX.setAttribute("onclick","removeRow(this)");
			var spanBlock = document.createElement("span"); 
				spanBlock.setAttribute("class","spanBlock")
				
			tr.appendChild(td1); 
			tr.appendChild(td2); 
			tr.appendChild(td3); 
			tr.appendChild(td4); 
			
			td1.appendChild(spanBlock); 		
			spanBlock.appendChild(document.createTextNode("\u00A0"+rowID+"\u00A0")); 			
			td2.appendChild(document.createTextNode(usrDB[rowID]));  
			td3.appendChild(document.createTextNode(emDB[rowID]));  
			td4.appendChild(btnX); 
			usrTable.appendChild(tr);
			
			
			
			infoPanelRight.innerHTML = '<p><img src="ico/check.png">&nbsp&nbspYou have succesfully added an user.</p>';
			rowID++;
			
			if(rowID%2)
			{
				tr.style.backgroundColor = "#FBFCFC";
			}
		}	
	}
	
	
	
	function clearInputs()
	{
		var submitPanelLeft = document.getElementById("submitPanelLeft");
		var usr = document.getElementById("user").value;
		var em = document.getElementById("email").value;
		var	submitButton  = document.getElementById("submitButton");
		//var usrPattern = /^[a-zA-Z]+$/;
		//var emPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		//if(emPattern.test(em)==false)
		 
		if(usr!="" || em!="")
		{
				
			if(document.getElementById("resetButton"))
			{
				
			} 
			else 
			{
				var resetButton = document.createElement("p"); 
					resetButton.appendChild(document.createTextNode("Reset fields")); 
					resetButton.setAttribute("onclick","clearSubmit()");
					resetButton.setAttribute("class","clearSubmit");
					resetButton.setAttribute("id","resetButton");
					submitPanelLeft.appendChild(resetButton);	
			}		
		} 
	}
	
	
	
	function removeRow(r)
	{
		var z = r.parentNode.parentNode.rowIndex;
			document.getElementById("usrTable").deleteRow(z);
			
		var ActualRowID = r.getAttribute("id");
			delete usrDB[ActualRowID];
			delete emDB[ActualRowID];			
		var rowsLength = document.getElementById("usrTable").rows.length; 
		var submitPanelLeft = document.getElementById("submitPanelLeft");
		submitPanelLeft.innerHTML ='<button id="addUserButton" class="button-submit" onclick="showForm()"><img id="plus" src="ico/p_white.png">&nbsp Add User</button>';
		
		if(rowsLength<11){
			document.getElementById("addUserButton").removeAttribute("disabled");
			document.getElementById("plus").setAttribute("src", "ico/p_white.png");
			document.getElementById("infoPanelRight").innerHTML = '';
		}
		if(rowsLength==1){
			document.getElementById("infoPanelRight").innerHTML = '<p><img src="ico/add.png">&nbsp&nbspUsers table is empty. Add some data</p>';
		}
	}

	
		
	function sortTable(n) 
	{
		var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
		var usrTable = document.getElementById("usrTable");
			switching = true;
			dir = "asc"; 

		while (switching) 
		{
			switching = false;
			rows = usrTable.getElementsByTagName("tr");

			for (i=1;i<(rows.length-1);i++)
			{
				shouldSwitch = false;
				x = rows[i].getElementsByTagName("td")[n];
				y = rows[i + 1].getElementsByTagName("td")[n];
				if (dir == "asc") 
				{
					if (x.innerHTML.toLowerCase()>y.innerHTML.toLowerCase())
					{
						shouldSwitch= true;
						break;
					}
				} else 
				if (dir == "desc")
				{
					if (x.innerHTML.toLowerCase()<y.innerHTML.toLowerCase()) 
					{
						shouldSwitch = true;
						break;
					}
				}
			}
			if (shouldSwitch) 
			{
				rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
				switching = true;
				switchcount ++;      
			}
			else 
			{
				if (switchcount == 0 && dir == "asc") 
				{
					dir = "desc";
					switching = true;
				}
			}
		}
	}
	
	
