<?php
session_destroy();
unset($_SESSION['baMemberID']);
header('Location:?a=balogin');
