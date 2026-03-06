from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
iris = load_iris()
X = iris.data
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(
X, y, test_size=0.25, random_state=42
)
k = 5
knn = KNeighborsClassifier(n_neighbors=k)
knn.fit(X_train, y_train)
y_pred = knn.predict(X_test)
print("Value of k:", k)
print("\nCorrect Predictions:")
for i in range(len(y_test)):
if y_test[i] == y_pred[i]:
print(f"Sample {i + 1}: Actual = {iris.target_names[y_test[i]]}, "
f"Predicted = {iris.target_names[y_pred[i]]}")
print("\nWrong Predictions:")
for i in range(len(y_test)):
17
if y_test[i] != y_pred[i]:
print(f"Sample {i + 1}: Actual = {iris.target_names[y_test[i]]}, "
f"Predicted = {iris.target_names[y_pred[i]]}")
accuracy = knn.score(X_test, y_test)
print("\nModel Accuracy:", accuracy)