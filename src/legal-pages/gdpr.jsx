import React, { useEffect } from "react";
import Header from "../componentes-webpage/header";
import Footer from "../componentes-webpage/footer";
import LegalContent from "../componentes-webpage/legal-content";

function GDPRPage() {
  //Esto se debería recuperar del idoma JSON.
  const ptitle = "GDPR";
  const title = "REGULACIÓN GENERAL DE PROTECCIÓN DE DATOS";
  const contenido = (
    <React.Fragment>
      <h2>Quiénes somos</h2>
      <p>
        De acuerdo con lo establecido por la Ley Orgánica 15/1999 de 13 de
        diciembre, de Protección de Datos de Carácter Personal, el Real Decreto
        1720/2007 de 21 de diciembre por el que se aprueba el Reglamento de
        desarrollo de la Ley Orgánica y demás normativa vigente en cada momento,
        y vela por garantizar un correcto uso y tratamiento de los datos
        personales del usuario, le informamos que sus datos serán incluidos en
        un fichero automatizado del que es titular , y podrán ser utilizados con
        finalidades especificadas en cada caso concreto.
      </p>
      <h2>Qué datos personales recogemos y por qué los recogemos</h2>
      <p>
        El envío de sus datos de carácter personal a través de esta página web,
        con motivo de realizar una solicitud de información/presupuesto supone
        el consentimiento por su parte para la inclusión y tratamiento de sus
        datos en el fichero CLIENTES, registrado por esta empresa ante la AGPD.
        Los datos obtenidos serán utilizados para atender la solicitud realizada
        por usted mismo.
      </p>
      <p>
        Los datos facilitados podrán ser utilizados, además, para enviarle
        información sobre nuestros productos y servicios. Si no desea recibir
        este tipo de información, no tiene más que comunicarlo a Paloma
        Rebolleda.
      </p>
      <p>
        Facilitar el acceso a los contenidos ofrecidos a través de la página
        web.
      </p>
      <h3>Comentarios</h3>
      <p>
        Cuando los visitantes dejan comentarios en la web, recopilamos los datos
        que se muestran en el formulario de comentarios, así como la dirección
        IP del visitante y la cadena de agentes de usuario del navegador para
        ayudar a la detección de spam.
      </p>
      <p>
        Una cadena anónima creada a partir de tu dirección de correo electrónico
        (también llamada hash) puede ser proporcionada al servicio de Gravatar
        para ver si la estás usando. La política de privacidad del servicio
        Gravatar está disponible aquí: https://automattic.com/privacy/. Después
        de la aprobación de tu comentario, la imagen de tu perfil es visible
        para el público en el contexto de su comentario.
      </p>
      <h3>Medios</h3>
      <p>
        Si subes imágenes a la web deberías evitar subir imágenes con datos de
        ubicación (GPS EXIF) incluidos. Los visitantes de la web pueden
        descargar y extraer cualquier dato de localización de las imágenes de la
        web.
      </p>
      <h3>Formularios de contacto</h3>
      <p>
        Te informamos que los datos de carácter personal que nos proporcionas
        rellenando el formulario serán tratados por Paloma Rebolleda como
        responsable de esta web. La finalidad de la recogida y tratamiento de
        los datos personales que te solicitamos es para poder contestar a la
        consulta o propuesta planteada.
      </p>
      <p>
        Legitimación: al marcar la casilla de aceptación, estás dando tu
        legítimo consentimiento para que tus datos sean tratados conforme a las
        finalidades de este formulario descritas en la presente política de
        privacidad. Como usuario e interesado te informamos de que los datos que
        nos facilitas estarán ubicados en los servidores de Paloma Rebolleda.
        Podrás ejercer tus derechos de acceso, rectificación, limitación y
        suprimir los datos en{" "}
        <a class="green" href="mailto:paloma.rebolleda@gmail.com">
          paloma.rebolleda@gmail.com
        </a>{" "}
        así como el derecho a presentar una reclamación ante una autoridad de
        control. Puedes consultar la información adicional y detallada sobre
        Protección de Datos en la presente política de privacidad.
      </p>
      <h3>Envío de currículums</h3>
      <p>
        El envío de currículums a través de esta página web supone el
        consentimiento por su parte para la inclusión y tratamiento de sus datos
        en el fichero CURRÍCULUMS, registrado por esta empresa ante la AGPD. Los
        datos obtenidos de su currículum podrán ser utilizados con fines de
        selección de personal para posibles contrataciones de esta empresa.
      </p>
      <h3>Cookies</h3>
      <p>
        Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre,
        dirección de correo electrónico y web en cookies. Esto es para tu
        comodidad, para que no tengas que volver a rellenar tus datos cuando
        dejes otro comentario. Estas cookies tendrán una duración de un año.
      </p>
      <p>
        Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie
        temporal para determinar si tu navegador acepta cookies. Esta cookie no
        contiene datos personales y se elimina al cerrar el navegador.
      </p>
      <p>
        Cuando inicias sesión, también instalaremos varias cookies para guardar
        tu información de inicio de sesión y tus opciones de visualización de
        pantalla. Las cookies de inicio de sesión duran dos días, y las cookies
        de opciones de pantalla duran un año. Si seleccionas «Recordarme», tu
        inicio de sesión perdurará durante dos semanas. Si sales de tu cuenta,
        las cookies de inicio de sesión se eliminarán.
      </p>
      <p>
        Si editas o publicas un artículo se guardará una cookie adicional en tu
        navegador. Esta cookie no incluye datos personales y simplemente indica
        el ID del artículo que acabas de editar. Caduca después de 1 día.
      </p>
      <h3>Contenido incrustado de otros sitios web</h3>
      <p>
        Los artículos de este sitio pueden incluir contenido incrustado (por
        ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de
        otras web se comporta exactamente de la misma manera que si el visitante
        hubiera visitado la otra web.
      </p>
      <p>
        Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar
        un seguimiento adicional de terceros, y supervisar tu interacción con
        ese contenido incrustado, incluido el seguimiento de tu interacción con
        el contenido incrustado si tienes una cuenta y estás conectado a esa
        web.
      </p>
      <h3>Analítica</h3>
      <p>
        El estudio de la utilización de los servicios por parte de los usuarios
        y visitantes.
      </p>
      <h2>Con quién compartimos tus datos</h2>
      <p>
        {" "}
        no cederá información a terceros sin consentimiento previo de los
        usuarios, excepto en los supuestos regulados en los artículos 11 y 12 de
        la LOPD: Cuando la cesión está autorizada en una Ley; Cuando se trate de
        datos recogidos de fuentes accesibles al público; Cuando la cesión que
        deba efectuarse tenga por destinatario al Defensor del Pueblo, el
        Ministerio Fiscal o los Jueves o Tribunales o el Tribunal de Cuentas, en
        el ejercicio de las funciones que tiene atribuidas; Cuando la cesión
        tenga como destinatario a instituciones autonómicas con funciones
        análogas al Defensor del Pueblo o al Tribunal de Cuentas; Si la
        comunicación se efectúa previo procedimiento de disociación.
      </p>
      <p>
        En el supuesto de que se solicitase al usuario datos de carácter
        personal por medios distintos de los anteriormente expuestos, les
        comunicará de forma expresa e inequívoca respecto de las condiciones en
        que se recojan datos personales y las finalidades con las que van a ser
        utilizados, de la obligación de facilitarlos o no, de los derechos que
        asisten al usuario, de las condiciones en que se pueden ejercitar, de
        los destinatarios de la información, del responsable del fichero y de
        cualquier otra información complementaria que resulte necesaria.
      </p>
      <p>
        Podrá ejercer su derecho de acceso, rectificación, cancelación y
        oposición al tratamiento de sus datos personales, en los términos y en
        las condiciones previstos en la LOPD, escribiendo a la dirección de
        correo{" "}
        <a href="mailto:paloma.rebolleda@gmail.com">
          paloma.rebolleda@gmail.com
        </a>
        .
      </p>
      <p>
        El hecho de que no introduzca los datos de carácter personal que se le
        piden obligatoriamente en el formulario de contacto podrá tener como
        consecuencia que , no pueda atender su solicitud.
      </p>
      <p>
        Así mismo, aceptando este aviso legal, reconoce que la información y los
        datos personales que se recogen son exactos y verídicos.
      </p>
      <h2>Cuánto tiempo conservamos tus datos</h2>
      <p>
        Si dejas un comentario, el comentario y sus metadatos se conservan
        indefinidamente. Esto es para que podamos reconocer y aprobar
        comentarios sucesivos automáticamente en lugar de mantenerlos en una
        cola de moderación.
      </p>
      <p>
        De los usuarios que se registran en nuestra web (si los hay), también
        almacenamos la información personal que proporcionan en su perfil de
        usuario. Todos los usuarios pueden ver, editar o eliminar su información
        personal en cualquier momento (excepto que no pueden cambiar su nombre
        de usuario). Los administradores de la web también pueden ver y editar
        esa información.
      </p>
      <h2>Qué derechos tienes sobre tus datos</h2>
      <p>
        Puedes solicitar que eliminemos cualquier dato personal que tengamos
        sobre ti rellenando{" "}
        <a
          class="green"
          href="https://mp.2mp.es/politica-privacidad/darse-de-baja-de-datos-personales/"
          target="_blank"
          rel="noopener noreferrer"
        >
          este formulario
        </a>
        . Esto no incluye ningún dato que estemos obligados a conservar con
        fines administrativos, legales o de seguridad.
      </p>
      <h2>Dónde enviamos tus datos</h2>
      <p>
        Los comentarios de los visitantes puede que los revise un servicio de
        detección automática de spam.
      </p>
      <h2>Información de contacto</h2>
      <p class="localizacion_nombre">Paloma Rebolleda</p>
      <p class="localizacion_calle">---</p>
      <p class="localizacion_cp_y_ciudad">---</p>
      <p class="localizacion_pais">España.</p>
      <p class="localizacion_telefono">
        <a class="green" href="tel:+34912132323">
          +34 666 66 66
        </a>
      </p>
      <p>
        <a class="green" href="mailto:paloma.rebolleda@gmail.com">
          paloma.rebolleda@gmail.com
        </a>
      </p>
      <h3>Cómo protegemos tus datos</h3>
      <p>
        Igualmente le informamos que Paloma Rebolleda, tiene implantadas las
        medidas técnicas y organizativas necesarias para garantizar la seguridad
        de sus datos de carácter personal y evitar su alteración, la pérdida y
        el tratamiento y/o el acceso no autorizado, teniendo en cuenta el estado
        de la tecnología, la naturaleza de los datos almacenados y los riesgos
        provenientes de la acción humana o del medio físico y natural a que
        están expuestas. Todo esto, de acuerdo con lo que prevé el artículo 9 de
        la Ley Orgánica 15/1999 de Protección de Datos de Carácter personal y el
        Real Decreto 1720/2007, de 21 de diciembre de desarrollo de la citada
        Ley.
      </p>
      <p>
        Paloma Rebolleda, se compromete a tratar de manera absolutamente
        confidencial sus datos de carácter personal y hacerlos servir sólo para
        las finalidades indicadas.
      </p>
    </React.Fragment>
  );

  useEffect(() => {
    document.title = ptitle;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <LegalContent pageTitle={title} pageHTMLContent={contenido} />
      <Footer />
    </React.Fragment>
  );
}

export default GDPRPage;
