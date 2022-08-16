import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";

const Features = ({ description, caracteristiques }) => {
  return (
    <div>
      <div className="w-full mx-auto">
        <div data-xt-toggle="{ min: 1, duration: 500 }">
          <div className="xt-card p-1.5 rounded-full text-gray-900 xt-links-default bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm backdrop-saturate-50">
            <nav
              aria-label="Navigation"
              className="xt-list xt-list-1 flex-col md:flex-row md:flex-nowrap"
            >
              <a
                role="button"
                className="xt-button flex-auto py-2 px-3 text-xs rounded-full font-medium leading-snug tracking-wider uppercase transition hover:bg-white hover:text-orange-500 active:text-white active:bg-orange-500 on:text-white on:bg-orange-500"
                data-xt-toggle-element
                data-xt-hash="description"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon text-base opacity-50 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>{" "}
                Description
              </a>
              <a
                role="button"
                className="xt-button flex-auto py-2 px-3 text-xs rounded-full font-medium leading-snug tracking-wider uppercase transition hover:bg-white hover:text-orange-500 active:text-white active:bg-orange-500 on:text-white on:bg-orange-500"
                data-xt-toggle-element
                data-xt-hash="features"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon text-base opacity-50 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                caractéristique
              </a>
            </nav>
          </div>

          <div className="mt-3">
            <div
              className="off:hidden out:pointer-events-none transition opacity-0 scale-95 in:opacity-100 in:scale-100 out:scale-105"
              data-xt-toggle-target
            >
              <div className="xt-card rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-white">
                <div className="xt-h5">Description</div>

                <p>
                  <SanityBlockContent blocks={description} />
                </p>
              </div>
            </div>

            <div
              className="off:hidden out:pointer-events-none transition opacity-0 scale-95 in:opacity-100 in:scale-100 out:scale-105"
              data-xt-toggle-target
            >
              <div className="xt-card rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-white">
                <div className="xt-h5">Caractéristique</div>
                <table className="table-fixed my-4 xt-my-auto w-full">
                  <tbody>
                    {caracteristiques.map((caracteristique, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200 font-bold">
                          {caracteristique.caracteristique}
                        </td>
                        <td className="py-2 px-4 text-sm align-top leading-snug border border-gray-200">
                          {caracteristique.description}
                        </td>
                      </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
