<?php
    /**
     * Created by PhpStorm.
     * User: OluwadamilolaAdebayo
     * Date: 8/3/16
     * Time: 9:43 PM
     */

    namespace Fam\Http\Controllers;


    class HomeController extends Controller {
        public function index(){
            return view('front.pages.home');
        }
    }