"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PawPrint,
  Search,
  Heart,
  MapPin,
  Clock,
  Utensils,
  Users,
  ChevronDown,
  Sparkles,
  Shield,
  TreePine,
  Bird,
  Fish,
  Bug,
  X,
  Leaf,
  Globe,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Animal {
  id: string;
  name: string;
  scientificName: string;
  category: "mammals" | "birds" | "reptiles" | "marine" | "insects";
  description: string;
  habitat: string;
  diet: string;
  lifespan: string;
  conservationStatus:
    | "Least Concern"
    | "Near Threatened"
    | "Vulnerable"
    | "Endangered"
    | "Critically Endangered";
  funFact: string;
  image: string;
  population: string;
}

const categories = [
  { key: "all", label: "All Animals", icon: PawPrint },
  { key: "mammals", label: "Mammals", icon: TreePine },
  { key: "birds", label: "Birds", icon: Bird },
  { key: "reptiles", label: "Reptiles & Amphibians", icon: Shield },
  { key: "marine", label: "Marine Life", icon: Fish },
  { key: "insects", label: "Insects", icon: Bug },
] as const;

const conservationColors: Record<string, string> = {
  "Least Concern":
    "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Near Threatened":
    "bg-yellow-100 text-yellow-800 border-yellow-200",
  Vulnerable: "bg-orange-100 text-orange-800 border-orange-200",
  Endangered: "bg-red-100 text-red-800 border-red-200",
  "Critically Endangered":
    "bg-rose-100 text-rose-800 border-rose-200",
};

const conservationDots: Record<string, string> = {
  "Least Concern": "bg-emerald-500",
  "Near Threatened": "bg-yellow-500",
  Vulnerable: "bg-orange-500",
  Endangered: "bg-red-500",
  "Critically Endangered": "bg-rose-500",
};

export default function Home() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  const fetchAnimals = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/animals`);
      const data = await res.json();
      setAnimals(data.animals);
    } catch {
      setAnimals([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAnimals();
  }, [fetchAnimals]);

  const filteredAnimals = animals.filter(
    (a) =>
      (activeCategory === "all" || a.category === activeCategory) &&
      (a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const openDetail = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <PawPrint className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Wild<span className="text-emerald-600">Pedia</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
            <Globe className="w-4 h-4" />
            <span>Discover the Animal Kingdom</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/animals/hero-banner.png"
              alt="Wildlife hero banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge
                variant="secondary"
                className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Explore 15+ Amazing Species
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Discover the Wonder
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  of Wildlife
                </span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
                Journey through the animal kingdom — from the depths of the
                ocean to the peaks of mountains. Learn about incredible
                creatures and how we can protect them.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="bg-card rounded-2xl border shadow-lg p-4 sm:p-6">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search animals by name, species, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                        : "bg-muted text-muted-foreground hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {filteredAnimals.length}
              </span>{" "}
              {filteredAnimals.length === 1 ? "animal" : "animals"}
              {searchQuery && (
                <span>
                  {" "}
                  for &quot;<span className="font-medium">{searchQuery}</span>
                  &quot;
                </span>
              )}
            </p>
            {favorites.size > 0 && (
              <Badge variant="outline" className="gap-1">
                <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                {favorites.size} favorite{favorites.size > 1 ? "s" : ""}
              </Badge>
            )}
          </div>
        </section>

        {/* Animal Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-8">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card
                  key={i}
                  className="overflow-hidden animate-pulse"
                >
                  <div className="aspect-[4/3] bg-muted" />
                  <CardContent className="p-4">
                    <div className="h-5 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-3 bg-muted rounded w-1/2 mb-3" />
                    <div className="h-3 bg-muted rounded w-full mb-1" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredAnimals.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-1">No animals found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredAnimals.map((animal, index) => (
                  <motion.div
                    key={animal.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-emerald-200 cursor-pointer h-full flex flex-col">
                      {/* Image */}
                      <div
                        className="relative aspect-[4/3] overflow-hidden"
                        onClick={() => openDetail(animal)}
                      >
                        <img
                          src={animal.image}
                          alt={animal.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        {/* Conservation Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge
                            className={`${conservationColors[animal.conservationStatus]} text-xs font-medium`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${conservationDots[animal.conservationStatus]} mr-1`}
                            />
                            {animal.conservationStatus}
                          </Badge>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(animal.id);
                          }}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              favorites.has(animal.id)
                                ? "text-red-500 fill-red-500"
                                : "text-gray-600"
                            }`}
                          />
                        </button>

                        {/* Name overlay */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                            {animal.name}
                          </h3>
                          <p className="text-white/80 text-xs italic drop-shadow-md">
                            {animal.scientificName}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="p-4 flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                          {animal.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-xs mt-auto">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-3 h-3 text-emerald-500" />
                            <span className="truncate">
                              {animal.habitat.split("—")[0].split(",")[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-3 h-3 text-emerald-500" />
                            <span>{animal.lifespan.split(" ")[0]}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Utensils className="w-3 h-3 text-emerald-500" />
                            <span className="truncate">
                              {animal.diet.split("—")[0].trim()}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Users className="w-3 h-3 text-emerald-500" />
                            <span className="truncate">
                              {animal.population}
                            </span>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="p-4 pt-0">
                        <Button
                          onClick={() => openDetail(animal)}
                          variant="outline"
                          className="w-full group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors"
                        >
                          <Info className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </section>

        {/* Fun Facts Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Badge
                variant="secondary"
                className="mb-3 bg-emerald-100 text-emerald-800"
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Did You Know?
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                Amazing Animal Facts
              </h2>
              <p className="text-muted-foreground mt-2">
                Nature is full of surprises — here are some of our favorites
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {animals.slice(0, 6).map((animal, i) => (
                <motion.div
                  key={animal.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow border-border/50">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                          <Leaf className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">
                            {animal.name}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {animal.funFact}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conservation Status Guide */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Conservation Status Guide
            </h2>
            <p className="text-muted-foreground mt-2">
              Understanding the threats facing our wildlife
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {Object.entries(conservationColors).map(([status, colorClass]) => (
              <Card key={status} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <Badge className={`${colorClass} mb-2 text-xs`}>
                    <span
                      className={`w-2 h-2 rounded-full ${conservationDots[status]} mr-1.5`}
                    />
                    {status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {status === "Least Concern" &&
                      "Population is stable and not at risk"}
                    {status === "Near Threatened" &&
                      "Close to qualifying as vulnerable"}
                    {status === "Vulnerable" &&
                      "High risk of endangerment in the wild"}
                    {status === "Endangered" &&
                      "Serious risk of extinction in the wild"}
                    {status === "Critically Endangered" &&
                      "Extremely high risk of extinction"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <PawPrint className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">
                Wild<span className="text-emerald-600">Pedia</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Protecting wildlife starts with understanding. Learn, share, and
              help conserve our planet&apos;s incredible biodiversity.
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Leaf className="w-3 h-3 text-emerald-500" />
              Made with care for nature
            </div>
          </div>
        </div>
      </footer>

      {/* Animal Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
          {selectedAnimal && (
            <ScrollArea className="max-h-[90vh]">
              <div className="relative">
                {/* Hero Image */}
                <div className="relative aspect-[16/9] w-full">
                  <img
                    src={selectedAnimal.image}
                    alt={selectedAnimal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <Badge
                      className={`${conservationColors[selectedAnimal.conservationStatus]} mb-2`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${conservationDots[selectedAnimal.conservationStatus]} mr-1`}
                      />
                      {selectedAnimal.conservationStatus}
                    </Badge>
                    <h2 className="text-2xl font-bold text-white">
                      {selectedAnimal.name}
                    </h2>
                    <p className="text-white/80 text-sm italic">
                      {selectedAnimal.scientificName}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedAnimal.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <InfoCard
                      icon={<MapPin className="w-4 h-4 text-emerald-500" />}
                      label="Habitat"
                      value={selectedAnimal.habitat}
                    />
                    <InfoCard
                      icon={<Utensils className="w-4 h-4 text-emerald-500" />}
                      label="Diet"
                      value={selectedAnimal.diet}
                    />
                    <InfoCard
                      icon={<Clock className="w-4 h-4 text-emerald-500" />}
                      label="Lifespan"
                      value={selectedAnimal.lifespan}
                    />
                    <InfoCard
                      icon={<Users className="w-4 h-4 text-emerald-500" />}
                      label="Population"
                      value={selectedAnimal.population}
                    />
                  </div>

                  <Separator className="mb-6" />

                  {/* Fun Fact */}
                  <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-emerald-900 mb-1">
                          Fun Fact
                        </h4>
                        <p className="text-sm text-emerald-800 leading-relaxed">
                          {selectedAnimal.funFact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-muted/50 rounded-lg p-3">
      <div className="flex items-center gap-1.5 mb-1">
        {icon}
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
      </div>
      <p className="text-sm font-medium leading-snug">{value}</p>
    </div>
  );
}
