document.getElementById('mi formulario').addEventlistener('submit',function (event) {
let nombre = document.getElementbyid('nombre').value;
if (nombre === ' ') {
alert('el nombre es obligatorio.');
Event.preventdafault(); // Evita que el formulario se envíe

}

});

<script>
    function validar nombre() {
        var nombre=document.getElementById('nombreinput').value
        var nombreerror=document.getElementById('nombreerror');

         // Verifica si el nombre contiene números o solo espacios en blanco
         if (/\d/.test(nombre) || /^\s*$/.test(nombre)) {
            nombreError.style.display = 'inline';
        } else {
            nombreError.style.display = 'none';
        }
    }


document.getElementById('formulario').addEventListener('submit', function(event) {
            var nombre = document.getElementById('nombreInput').value;
            var email = document.getElementById('emailInput').value;
    
            // Verifica si el nombre contiene números o solo espacios en blanco
            if (/\d/.test(nombre) || /^\s*$/.test(nombre)) {
                event.preventDefault();  // Evita el envío del formulario
                alert('El campo nombre no puede contener números ni estar compuesto solo por espacios en blanco.');
            } else if (email === '') {
                event.preventDefault();  // Evita el envío del formulario
                alert('El campo email es obligatorio.');
            } else {
                alert('Formulario enviado correctamente.');
            }
        });
        </script>
 
 
 
 
 
 
 
 
 
 

            
                          


    





























</script>














