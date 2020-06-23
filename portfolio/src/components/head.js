import React from 'react';
import { Helmet } from 'react-helmet';
import "./../assets/css/theme-1.css";

const Head = () => {
  return (
    <Helmet title="Portfolio">
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script defer src={"./../../js/fontawesome-all.js"}></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
        crossorigin="anonymous"></script>
      <script type="text/javascript" src={"./../../js/plugins/jquery-scrollTo/jquery.scrollTo.min.js"}></script>
      <script type="text/javascript" src={"./../../js/plugins/easy-pie-chart/dist/jquery.easypiechart.min.js"}></script>
      <script type="text/javascript" src={"./../../js/plugins/popper.min.js"}></script>
      <script type="text/javascript" src={"./../../js/plugins/bootstrap/js/bootstrap.min.js"}></script>
      <script type="text/javascript" src={"./../../js/plugins/back-to-top.js"}></script>
      <script type="text/javascript" src={"./../../js/plugins/imagesloaded.pkgd.min.js"}></script>
      <script type="text/javascript" src={"./../../js/plugins/isotope.pkgd.min.js"}></script>
      <script src={'./../../js/main.js'} type="text/javascript"></script>

      <link rel="shortcut icon" href="favicon.ico" />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic'
        rel='stylesheet' type='text/css' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
    </Helmet>
  )
}

export default Head;