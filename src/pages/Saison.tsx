export default function Saison() {
  return (
    <>
      <div className="mt-8">
        <div className="text-center text-2xl text-blue-900 mb-8">
          SAISON ACTUELLE
        </div>

        <div className="" >


          <div className="flex justify-center ">
            <div className=" text-center relative  bg-white border-2 border-gray-100 rounded-t-xl  w-3/6 py-3  ">
              <div className="absolute  left-10 bg-green-400 px-2  py-0.5  rounded-md">• Terminé</div>
              <div className="text-gray-400 font-medium ">Match Amical - Aujourd'hui</div>
            </div>
          </div>
          <div className="flex justify-center  ">
          <div className="flex justify-between  w-3/6   border-gray-100 border-l-2 border-r-2 border-b-2 rounded-b-xl drop-shadow-sm ">
            <div className="w-1/3  p-6">
              <div className="flex items-center justify-center ">
                <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center  border-2 border-gray-300">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center  drop-shadow-lg">
                      <div className="w-14 h-14 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-center  " >
                  <div className="my-4" >psg</div>
                  <div>Joueur X</div>
                  <div>Joueur X</div>
              </div>

            </div>
            <div className="w-1/3  p-6 flex justify-center  space-x-8 my-10">
                <div>2</div>
                <div>:</div>
                <div>1</div>
            </div>
            <div className="w-1/3  p-6">
              <div className="flex items-center justify-center ">
                <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center  border-2 border-gray-300">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center  drop-shadow-lg">
                      <div className="w-14 h-14 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-center  " >
                  <div className="my-4" >Equipe adversaire</div>
                  <div>Joueur X</div>
              </div>
            </div>
            </div>

          </div>
        </div>


      </div>



    </>
  );
}
