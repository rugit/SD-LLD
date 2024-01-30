# Singleton Design Pattern

![Singleton Pattern](https://refactoring.guru/images/patterns/diagrams/singleton/structure-en.png)

## Overview

Singleton is a creational design pattern that ensures only one object of its kind exists and provides a single point of access to it for any other code. This pattern restricts the instantiation of a class to a single instance and provides a global point of access to that instance.

## Key Concepts

- **Hide the Constructor:** The instance of the object cannot be created directly, so the constructor is hidden or made private.

- **Static Access Function:** Clients can access the instance through a static function of the class, which is responsible for creating the instance if it doesn't exist and providing access to the existing instance otherwise.

- **Static Member Variable:** The instance is stored in a static member variable of the class, ensuring that only one instance is created and shared among all clients.

- **Eager Loading:** Optionally, the instance can be initialized when the class is created for eager loading. This ensures that the instance is available immediately.

## Identification

Singleton can be recognized by a static creation method that returns the same cached object, providing a single point of access to the instance.

## Usage

To use the Singleton pattern, follow these steps:

1. Include the Singleton class in your project.

2. Access the singleton instance using the static method `getInstance()
