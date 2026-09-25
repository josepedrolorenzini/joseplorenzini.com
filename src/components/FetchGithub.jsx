import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const FetchGithub = () => {
  const [gitHubData, setGithubData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.github.com/users/josepedrolorenzini/repos?sort=updated&per_page=8",
    );
    const data = await response.json();
    // setGithubData(data)
    // console.log(data);
    return data;
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setGithubData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  isLoading && <p>Loading...</p>;
  error && <p>Error: {error.message}</p>;
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-100">
        Recent GitHub repositories
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gitHubData.map((repository) => (
          <article
            key={repository.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Header de la card */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 p-4">
              <img
                src={repository.owner?.avatar_url}
                alt={repository.owner?.login}
                className="h-10 w-10 rounded-full border border-slate-200"
              />

              <div className="min-w-0">
                <p className="text-xs text-slate-500">
                  {repository.owner?.login}
                </p>

                <h3 className="truncate text-base font-semibold text-slate-900">
                  {repository.name}
                </h3>
              </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-1 flex-col p-5">
              <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                {repository.description || "Sin descripción."}
              </p>

              <div className="mt-auto flex items-center justify-between gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {repository.language || "Sin lenguaje"}
                </span>

                <span className="flex items-center gap-1 text-sm text-slate-500">
                  ⭐ {repository.stargazers_count}
                </span>
              </div>
            </div>

            {/* Footer / acción */}
            <a
              href={repository.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-t border-slate-100 px-5 py-3 text-center text-sm font-semibold text-blue-600 transition group-hover:bg-blue-50 group-hover:text-blue-700"
            >
              Ver en GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FetchGithub;
