<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pid');
            $table->integer('inserted_by')->unsigned();
            $table->string('name')->nullable();
            $table->string('address')->nullable();
            $table->string('property_type')->nullable();
            $table->string('bath_number')->nullable();
            $table->string('toilet_number')->nullable();
            $table->string('bed_number')->nullable();
            $table->string('year_built')->nullable();
            $table->string('long')->nullable();
            $table->string('lat')->nullable();
            $table->string('water')->nullable()->comment('This would be in Percentage');
            $table->string('good_area')->nullable()->comment('This would be in Percentage');
            $table->string('security')->nullable()->comment('This would be in Percentage');
            $table->string('power')->nullable()->comment('This would be in Percentage');
            $table->string('Price')->nullable();
            $table->string('payment_period')->nullable();
            $table->string('hero_image_url')->nullable();
            $table->boolean('car_parking')->nullable();
            $table->boolean('garage')->nullable();
            $table->boolean('show_price')->nullable();
            $table->timestamps();

            $table->foreign('inserted_by')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('properties');
    }
}
