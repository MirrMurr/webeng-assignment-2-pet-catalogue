<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Pet::all();
    }

    public function getPetStatistics() {
        $numberOfAlivePets = Pet::whereNull('dateOfDeath')->count();
        $numberOfPassedPets = Pet::whereNotNull('dateOfDeath')->count();
        return response()->json([
            'alive' => $numberOfAlivePets,
            'passed' => $numberOfPassedPets
        ], 200);
    }

    public function getAlivePets(Request $request) {
        return Pet::whereNull('dateOfDeath')->get();
    }

    public function getPassedPets(Request $request) {
        return Pet::whereNotNull('dateOfDeath')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated_pet_data = $request->validate([
            'name' => 'required',
            'species' => 'required',
            'dateOfBirth' => 'nullable',
            'dateOfDeath' => 'nullable',
            'note' => 'nullable'
        ]);

        return Pet::create($validated_pet_data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Pet $pet)
    {
        // return Pet::find($id);
        return $pet;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pet $pet)
    {
        $validated_pet_data = $request->validate([
            'name' => 'sometimes|required',
            'species' => 'sometimes|required',
            'dateOfBirth' => 'sometimes|nullable',
            'dateOfDeath' => 'sometimes|nullable',
            'note' => 'sometimes|nullable'
        ]);

        $pet->update($validated_pet_data);
        return $pet;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pet $pet)
    {
        $pet->delete();
        return response()->json(null, 204);
    }
}
